import * as React from "react";
import { Layout, Button, Space } from "antd";
import "./styles/index.less";
import { RowStyle, HeaderStyle } from "./CommonStyle";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-ant-design";
const { Header } = Layout;

const AppName: React.CSSProperties = {
    color: "ActiveBorder",
    fontWeight: "bold",
    fontFamily: "monospace",
    fontSize: 20,
};

const HomeBubtton: React.CSSProperties = {
    color: "ActiveBorder",
    borderColor: "transparent",
    borderRadius: 5,
    fontFamily: "monospace",
    ...AppName,
};

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
