import React from "react";
import "./App.css";
import NavHeader from "./components/HeaderBar";
import QuickLinks from "./components/QuickLinks";
import PopularEvents from "./components/PopularEvents";
import Main from "./components/Main";
import Event from "./components/Event";
import { Layout } from "antd";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./components/NotFound";
const { Header, Sider, Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Header className="header">
        <NavHeader />
      </Header>
      <Layout className="layout">
        <Sider className="sider-left">
          <QuickLinks />
        </Sider>
        <Content className="content">
          <Switch>
            <Route
              exact
              path="/"
              component={() => <Redirect to="/sports/football" />}
            />
            <Route exact path="/sports/football" component={Main} />
            <Route
              exact
              path="/sports/football/events/:event_id"
              component={Event}
            />
            <Route render={NotFound} />
          </Switch>
        </Content>
        <Sider className="sider-right" width={350}>
          <PopularEvents />
        </Sider>
      </Layout>
    </Layout>
  );
};

export default App;
