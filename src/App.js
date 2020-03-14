import React from "react";
import "./App.css";
import NavHeader from "./components/HeaderBar";
import QuickLinks from "./components/QuickLinks";
import PopularEvents from "./components/PopularEvents";
import Main from "./components/Main";
import Event from "./components/Event";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
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
            <Route exact path="/" component={Main} />
            <Route exact path="/events/:event_id" component={Event} />
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
