import * as React from "react";
import { Layout, Button, List, Card, BackTop, Modal } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { ContentStyle, RowStyle, ButtonStyle } from "../../CommonStyle";
import { nfts, NFT_Props } from "../../data";
import * as solanaWeb3 from "@solana/web3.js";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { useMeta } from "../../contexts";
import { getMintMetadata } from "../../actions";

const { Content } = Layout;
const { Meta } = Card;
const { PublicKey } = solanaWeb3;

const Home: React.FC = () => {
  const [visible, setVisible] = React.useState(false);
  const { foreground, background } = useMeta();
  const { connection } = useConnection();
  const [selectedNFT, setSelectedNFT] = React.useState<NFT_Props | null>();
  const navigate = useNavigate();
  const wallet = useWallet();

  React.useEffect(() => {
    const fnGetMintMetadata = async () => {
      try {
        await getMintMetadata(connection);
      } catch (error) {}
    };
    fnGetMintMetadata();
  }, [wallet, connection]);

  return (
    <Layout>
      <Content style={ContentStyle}>
        <div className="home-div" style={RowStyle}>
          <h1 className="my-alpha-header">
            <span className="my-alpha-title">My Alpha</span>
            <span className="my-alpha-count">{nfts.length}</span>
          </h1>
          <div className="my-color">
            <Button style={ButtonStyle} onClick={() => navigate(`/fusion`)}>
              Fuse alpha
            </Button>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <List
            dataSource={nfts}
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
            renderItem={(item, index) => (
              <List.Item>
                <Card
                  onClick={() => {
                    setSelectedNFT(item);
                    setVisible(true);
                  }}
                  hoverable
                  style={{ borderRadius: 10 }}
                  cover={<img alt="example" src={item.image} />}
                >
                  <Meta title={item.name} description={item.description} />
                </Card>
              </List.Item>
            )}
          />
        </div>
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
          console.log("onCancel");
        }}
        width={600}
      >
        <div>
          <div className="content-wrap-style" style={ContentWrapStyle}>
            <div className="flex-start-style" style={FlexStart}>
              <Card
                hoverable
                className="card-style"
                style={{ ...CardStyle, width: 300 }}
                cover={<img alt="example" src={selectedNFT?.image} />}
              >
                <Meta
                  title={selectedNFT?.name}
                  description={selectedNFT?.description}
                />
              </Card>
              <div className="attributes-style">
                <List
                  dataSource={selectedNFT?.attributes}
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

export default Home;
