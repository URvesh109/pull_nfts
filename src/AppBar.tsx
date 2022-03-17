import * as React from "react";
import { Layout, Button, Space } from "antd";
import "./styles/index.less";
import { RowStyle, HeaderStyle, AppName, HomeBubtton } from "./CommonStyle";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { WalletMultiButton } from "@solana/wallet-adapter-ant-design";
const { Header } = Layout;

const AppBar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Header style={HeaderStyle}>
        <div style={RowStyle}>
          <div style={AppName}>
            <Space onClick={() => navigate("/")}>
              <Button style={HomeBubtton}>Aplha Fusion</Button>
            </Space>
          </div>
          <div>
            <Space>
              <WalletMultiButton />
            </Space>
          </div>
        </div>
      </Header>
      <Outlet />
    </Layout>
  );
};

export default AppBar;
