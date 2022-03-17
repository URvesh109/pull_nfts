import * as React from "react";
import { Layout, Button, List, Card, BackTop, Modal, notification, Spin } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { ContentStyle, RowStyle, ButtonStyle } from "../../CommonStyle";
import { CustomMetadata } from "../../types";

import { useWallet, useConnection } from "@solana/wallet-adapter-react";
// import { useMeta } from "../../contexts";
import { fetch_accounts, get_all_nft_from_wallet, burn_nft_transac } from "../../actions";
import { ArtCard } from "../../components";

const { Content } = Layout;
const { Meta } = Card;

const Home: React.FC = () => {
  const [visible, setVisible] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);

  // const { foreground, background } = useMeta();
  const { connection } = useConnection();
  const [selectedNFT, setSelectedNFT] = React.useState<CustomMetadata | null>();
  const [walletNFT, setWalletNFT] = React.useState<Array<CustomMetadata> | []>();

  const navigate = useNavigate();
  const wallet = useWallet();

  React.useEffect(() => {
    const fnGetMintMetadata = async () => {
      try {
        setLoading(true);
        const metadata = await get_all_nft_from_wallet(wallet, connection);
        setWalletNFT(metadata);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    fnGetMintMetadata();
  }, [wallet, connection, setWalletNFT]);

  const burn_selected_nft = React.useCallback(async () => {
    try {
      const openNotification = () => {
        notification.success({
          message: "",
          description: "Token burn is successful",
        });
      };
      await burn_nft_transac(wallet, connection, selectedNFT!.mint, selectedNFT!.tokenAccount);
      setSelectedNFT(null);
      setVisible(false);
      openNotification();
      const metadata = await get_all_nft_from_wallet(wallet, connection);
      setWalletNFT(metadata);
    } catch (error) {}
  }, [connection, selectedNFT, wallet]);

  return (
    <Layout>
      <Content style={ContentStyle}>
        <div className="home-div" style={RowStyle}>
          <h1 className="my-alpha-header">
            <span className="my-alpha-title">My Alpha</span>
            <span className="my-alpha-count">{walletNFT?.length}</span>
          </h1>
          <div className="my-color">
            <Button style={ButtonStyle} onClick={() => navigate(`/fusion`)}>
              Fuse alpha
            </Button>
          </div>
        </div>
        {isLoading ? (
          <div
            style={{
              minHeight: "60vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spin size="large" />
          </div>
        ) : (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <List
              dataSource={walletNFT}
              style={{ display: "flex", justifyContent: "center" }}
              grid={{
                gutter: 10,
                column: 4,
                xxl: 6,
                xl: 5,
                lg: 4,
                md: 3,
                sm: 2,
                xs: 1,
              }}
              renderItem={(item) => (
                <List.Item>
                  <ArtCard
                    loading={isLoading}
                    onClick={() => {
                      setSelectedNFT(item);
                      setVisible(true);
                    }}
                    item={item.manifest}
                    hoverable
                    style={{ borderRadius: 10 }}
                  >
                    <Meta title={item.manifest.name} description={item.manifest.description} />
                  </ArtCard>
                </List.Item>
              )}
            />
          </div>
        )}
        <BackTop style={{ right: 35 }}>
          <div style={custom}>
            <ArrowUpOutlined />
          </div>
        </BackTop>
      </Content>
      <Modal
        footer={null}
        closable={false}
        visible={visible}
        onCancel={() => {
          setVisible(false);
          setSelectedNFT(null);
        }}
        width={600}
      >
        <div>
          <div className="content-wrap-style" style={ContentWrapStyle}>
            <div className="flex-start-style" style={FlexStart}>
              <Card
                hoverable
                style={{ ...CardStyle, width: 300 }}
                cover={<img alt="example" src={selectedNFT?.manifest.image} />}
              >
                <Meta
                  title={selectedNFT?.manifest.name}
                  description={selectedNFT?.manifest.description}
                />
              </Card>
              <div className="attributes-style">
                <List
                  dataSource={selectedNFT?.manifest.attributes}
                  style={{ padding: 10 }}
                  grid={{
                    gutter: 5,
                    column: 2,
                  }}
                  renderItem={(item) => (
                    <List.Item>
                      <div style={AttributesBox}>
                        <div style={{ ...AttributesText, color: "Background" }}>
                          {item.trait_type}
                        </div>
                        <div style={AttributesText}>{item.value}</div>
                      </div>
                    </List.Item>
                  )}
                />
              </div>
            </div>
          </div>
          <div style={burn_btn_style}>
            <Button style={ButtonStyle} onClick={burn_selected_nft}>
              Burn NFT
            </Button>
          </div>
        </div>
      </Modal>
    </Layout>
  );
};

const ContentWrapStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  marginTop: 30,
  gap: 10,
};

const CardStyle: React.CSSProperties = {
  borderRadius: 15,
};

const FlexStart: React.CSSProperties = {
  flex: 1,
  display: "flex",
};

const AttributesBox: React.CSSProperties = {
  flex: 1,
  gap: 10,
  borderRadius: 5,
  borderColor: "ActiveBorder",
  borderStyle: "solid",
};

const AttributesText: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  fontSize: 12,
  fontWeight: "bold",
};

const custom: React.CSSProperties = {
  height: 40,
  width: 40,
  lineHeight: "40px",
  borderColor: "red",
  borderRadius: 4,
  backgroundColor: "rgba(255, 255, 255, 0.4)",
  color: "#fff",
  textAlign: "center",
  fontSize: 14,
};

const burn_btn_style: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  marginTop: 10,
};

export default Home;
