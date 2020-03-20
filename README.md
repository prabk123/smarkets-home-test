# Smarkets Take Home Test

By [Prabodh Kakodkar](mailto:prabodhkakodkar@gmail.com) | [prabodhkakodkar.com](https://www.prabodhkakodkar.com)

## Installation Intructions

Navigate to [https://github.com/prabk123/smarkets-home-test](https://github.com/prabk123/smarkets-home-test)
Start the application by running the following commands:

```zsh
$ git clone git@github.com:prabk123/smarkets-home-test.git
$ cd smarkets-home-test
$ npm install
$ npm start
```

Run tests using

```zsh
$ npm test
```

Navigate to app in browser [http://localhost:3000](http://localhost:3000)
Enjoy!

## Discussion

I used the following technologies: HTML, CSS, React, Redux, Jest, and Enzyme. I used [create-react-app](https://goo.gl/26jfy4) to generate the scaffolding for this app. I've used Axios for making API calls and Ant Design as the framework for the UI.

## Problem

The idea was to build a single page application using the Samrkets API which contains a list of top Football events on the landing page. Essentially a vastly simplified version of this page: [https://smarkets.com/sport/football](https://smarkets.com/sport/football). If an event is clicked on, it should go to a different page to display the basic information about that event.

## Result

I designed the applications UI to closely resemble that of the current Smarkets platform. The landing page lists the teams, status, and last traded price for each of the top Football events, recieved from the API. Once an event is clicked, the aplication navigates to another page which contains more detailed information about the event, including current run time, score and last traded prices for the top 5 markets. Additionally, the application makes use of loading placeholders when the API calls are being made and handles errors in the event of a drop in internet connection or an incorrect url being entered.

## Custom Proxy

I used a custom proxy to bypass CORS as https://cors-anywhere.herokuapp.com/ seemed to significantly slow down the API response time.
