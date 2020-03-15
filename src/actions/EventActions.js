import axios from "axios";
import { addError, removeError } from "./ErrorActions";

export const GET_EVENTS = "GET_EVENTS";
export const GET_SINGLE_EVENT = "GET_SINGLE_EVENT";
export const RESET_EVENTS = "RESET_EVENTS";
export const RESET_SINGLE_EVENT = "RESET_SINGLE_EVENT";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/x-www-form-urlencoded"
  }
};

const handleEvents = (data, image) => {
  return { type: GET_EVENTS, data, image };
};

const handleSingleEvent = event => {
  return { type: GET_SINGLE_EVENT, event };
};

export const resetEvents = () => {
  return { type: RESET_EVENTS };
};

export const resetSingleEvent = () => {
  return { type: RESET_SINGLE_EVENT };
};

export const getEvents = () => {
  return async dispatch => {
    try {
      var data = [];
      // Perfom all API calls & Organise data as required
      const popularIds = await axios.get(
        `/v3/popular/event_ids/sport/football/`,
        config
      );
      const eventIds = popularIds.data.popular_event_ids.join(",");
      const eventsData = await axios.get(`/v3/events/${eventIds}/`, config);
      const events = eventsData.data.events;
      events.forEach(event => {
        const league = event.full_slug
          .split("/")[3]
          .split("-")
          .join(" ")
          .toUpperCase();
        data.push({
          id: event.id,
          league: league,
          start: event.start_datetime,
          state: event.state,
          name: event.name
        });
      });

      const marketsData = await axios.get(
        `/v3/events/${eventIds}/markets/?limit_by_event=1`,
        config
      );

      const markets = marketsData.data.markets;
      markets.forEach(market => {
        const idx = data.findIndex(x => x.id === market.event_id);
        if (idx >= 0) data[idx].marketId = market.id;
      });

      const fullTimeResults = markets.map(x => x.id);
      const contractData = await axios.get(
        `/v3/markets/${fullTimeResults}/contracts/`,
        config
      );

      const contracts = contractData.data.contracts;
      contracts.forEach(contract => {
        const idx = data.findIndex(x => x.marketId === contract.market_id);
        if (idx >= 0) {
          data[idx][contract.contract_type.name] = {
            name: contract.name,
            id: contract.id
          };
        }
      });

      const priceData = await axios.get(
        `/v3/markets/${fullTimeResults}/last_executed_prices/`,
        config
      );

      const prices = priceData.data.last_executed_prices[fullTimeResults[0]];
      prices.forEach(price => {
        const idx = data.findIndex(
          x =>
            x.HOME.id === price.contract_id ||
            x.DRAW.id === price.contract_id ||
            x.AWAY.id === price.contract_id
        );
        if (idx >= 0) {
          if (data[idx].HOME.id === price.contract_id) {
            data[idx].HOME.percent = price.last_executed_price;
            data[idx].HOME.decimal = (
              100 / Number(price.last_executed_price)
            ).toFixed(2);
          }
          if (data[idx].DRAW.id === price.contract_id) {
            data[idx].DRAW.percent = price.last_executed_price;
            data[idx].DRAW.decimal = (
              100 / Number(price.last_executed_price)
            ).toFixed(2);
          }
          if (data[idx].AWAY.id === price.contract_id) {
            data[idx].AWAY.percent = price.last_executed_price;
            data[idx].AWAY.decimal = (
              100 / Number(price.last_executed_price)
            ).toFixed(2);
          }
        }
      });

      const imageData = await axios.get(`/v3/tiles/`, config);
      const imageArr = imageData.data.images.filter(
        x =>
          x.category ===
          `.cat-football.cat-${data[0].league
            .toLowerCase()
            .split(" ")
            .join("-")}`
      );
      let image;
      if (imageArr.length > 0) {
        image = imageArr[0].url;
      } else {
        image =
          "//marketing-static.smarkets.com/static/images/general/tiles/cat-football/cat-football-2--mj.jpg";
      }
      // Dispatch handler with data
      dispatch(handleEvents(data, image));
      dispatch(removeError());
    } catch (err) {
      console.log(err);
      dispatch(addError(err.error_type ? err.error_type : err));
    }
  };
};

export const getSingleEvent = eventId => {
  return async dispatch => {
    try {
      const eventsData = await axios.get(`/v3/events/${eventId}/`, config);
      let event = eventsData.data.events[0];

      const eventStateData = await axios.get(`/v3/events/${eventId}/states/`);
      const eventState = eventStateData.data.event_states[0];

      event.state = eventState;

      const marketsData = await axios.get(
        `/v3/events/${eventId}/markets/?limit_by_event=5`,
        config
      );
      const markets = marketsData.data.markets;

      event.markets = markets;

      const marketIds = event.markets.map(x => x.id);

      const contractData = await axios.get(
        `/v3/markets/${marketIds}/contracts/`,
        config
      );

      let contracts = contractData.data.contracts;

      const priceData = await axios.get(
        `/v3/markets/${marketIds}/last_executed_prices/`,
        config
      );
      const prices = priceData.data.last_executed_prices[markets[0].id];
      prices.forEach(price => {
        const idx = contracts.findIndex(x => x.id === price.contract_id);
        if (idx >= 0) {
          contracts[idx].percent = price.last_executed_price;
          contracts[idx].decimal = (
            100 / Number(price.last_executed_price)
          ).toFixed(2);
        }
      });

      event.markets.forEach(market => {
        market.contracts = [];
      });

      contracts.forEach(contract => {
        const idx = event.markets.findIndex(x => x.id === contract.market_id);
        event.markets[idx].contracts.push(contract);
      });

      let eventNames = event.name.split(" vs ");
      if (eventNames.length === 1) eventNames = event.name.split(" vs. ");
      event.home = eventNames[0];
      event.away = eventNames[1];

      dispatch(handleSingleEvent(event));
      dispatch(removeError());
    } catch (err) {
      dispatch(addError(err.response ? err.response : err));
    }
  };
};
