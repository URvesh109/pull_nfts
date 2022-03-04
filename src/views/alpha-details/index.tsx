import * as React from "react";
import { Layout, Card, List } from "antd";
import { ContentStyle } from "../../CommonStyle";
import { useNavigate, useParams } from "react-router-dom";
import { useWindowDimension } from "../../hooks";
import { nfts } from "../../data";

const data = [
  { trait_type: "fur", value: "dark-intent-fur", rarity: "1.32%" },
  { trait_type: "shirt", value: "denim-vest", rarity: "1.32%" },
  { trait_type: "mouth", value: "angry-expression", rarity: "1.32%" },
  { trait_type: "pole", value: "golden-pole", rarity: "1.32%" },
  { trait_type: "head", value: "benie", rarity: "1.32%" },
  { trait_type: "shirt", value: "denim-vest", rarity: "1.32%" },
  { trait_type: "mouth", value: "angry-expression", rarity: "1.32%" },
  { trait_type: "pole", value: "golden-pole", rarity: "1.32%" },
  { trait_type: "head", value: "benie", rarity: "1.32%" },
];

const { Content } = Layout;
const { Meta } = Card;

const AlphaDetails: React.FC = () => {
  const navigate = useNavigate();
  const { height, width } = useWindowDimension();
  const params = useParams();

  return (
    <Layout>
      <Content style={CustomizeContentStyle}>
        <div>
          <div className="content-wrap-style" style={ContentWrapStyle}>
            <div className="flex-start-style" style={FlexStart}>
              <Card
                hoverable
                className="card-style"
                style={{ ...CardStyle, width: 300 }}
                cover={<img alt="example" src={nfts[0].image} />}
              >
                <Meta
                  title="Alpha Fusion"
                  description={"this is the description of my alpha nft"}
                />
              </Card>
              <div className="attributes-style">
                <List
                  dataSource={data}
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
                        <div
                          style={{ ...AttributesText, color: "ButtonShadow" }}
                        >
                          {item.rarity}
                        </div>
                      </div>
                    </List.Item>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

const CustomizeContentStyle: React.CSSProperties = {
  ...ContentStyle,
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
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

const FlexEnd: React.CSSProperties = {
  flex: 1,
  display: "flex",
};

const FlexStart: React.CSSProperties = {
  flex: 1,
  display: "flex",
};

const AttributeStyle: React.CSSProperties = {
  height: 300,
  overflowY: "scroll",
  marginRight: 10,
};

const FusedAttributeStyle: React.CSSProperties = {
  height: 300,
  overflowY: "scroll",
  marginRight: 10,
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

export default AlphaDetails;
