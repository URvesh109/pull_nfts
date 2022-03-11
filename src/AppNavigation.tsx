import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppBar from "./AppBar";
import Fusion from "./views/fusion";
import Home from "./views/home";
import AlphaDetails from "./views/alpha-details";
import { Layout, Empty } from "antd";
import { MetaProvider } from "./contexts";

const { Content } = Layout;

const EmptyPageStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
};

const AppNavigation = () => {
  return (
    <BrowserRouter>
      <MetaProvider>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route path="/" element={<Home />} />
            <Route path="/fusion" element={<Fusion />} />
            {/* <Route path="/alphaDetails/:id" element={<AlphaDetails />} /> */}
            <Route
              path="*"
              element={
                <Content style={EmptyPageStyle}>
                  <Empty description="Page not found" />
                </Content>
              }
            ></Route>
          </Route>
        </Routes>
      </MetaProvider>
    </BrowserRouter>
  );
};

export default AppNavigation;
