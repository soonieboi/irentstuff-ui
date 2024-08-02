import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

const PageLayout = () => {
  return (
    <Layout style={{ minHeight: "1000vh" }}>
      <Header></Header>
      <Content style={{ overflow: "initial" }}>
        <Outlet />
      </Content>
      <Footer>Ant Design ©{new Date().getFullYear()} Created by Ant UED</Footer>
    </Layout>
  );
};
export default PageLayout;
