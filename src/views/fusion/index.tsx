import * as React from "react";
import { Layout, Card, List, Button, Modal } from "antd";
import { ContentStyle, ButtonStyle } from "../../CommonStyle";
import { useNavigate } from "react-router-dom";
import { useWindowDimension } from "../../hooks";
import { nfts, filterNft, NFT_Props } from "../../data";

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

enum NFT_SELECTED {
  Selected_1,
  Selected_2,
}

const Fusion: React.FC = () => {
  const navigate = useNavigate();
  const { width } = useWindowDimension();
  const [visible, setVisible] = React.useState(false);
  const [nft_selected, set_nft_selected] =
    React.useState<NFT_SELECTED | null>();
  const [selectedNFT1, setSelectedNFT1] = React.useState<NFT_Props | null>();
  const [selectedNFT2, setSelectedNFT2] = React.useState<NFT_Props | null>();

  const [fuse, setFuse] = React.useState(false);

  const filter_NFTs = React.useMemo(() => {
    return nft_selected == NFT_SELECTED.Selected_1
      ? filterNft(selectedNFT2?.name)
      : filterNft(selectedNFT1?.name);
  }, [selectedNFT1, selectedNFT2, nft_selected]);

  const set_selection_for_nft_1 = React.useCallback(() => {
    setVisible(true);
    set_nft_selected(NFT_SELECTED.Selected_1);
  }, [setVisible, set_nft_selected]);

  const set_selection_for_nft_2 = React.useCallback(() => {
    setVisible(true);
    set_nft_selected(NFT_SELECTED.Selected_2);
  }, [setVisible, set_nft_selected]);

  return (
    <Layout>
      <Content style={CustomizeContentStyle}>
        <div className="content-wrap-style" style={ContentWrapStyle}>
          {selectedNFT1 ? (
            <div className="flex-end-style" style={FlexEnd}>
              <div className="attributes-style" style={AttributeStyle}>
                <List
                  dataSource={selectedNFT1.attributes}
                  style={{ padding: 10 }}
                  grid={{
                    gutter: 5,
                    column: width < 700 ? 1 : 2,
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
              <Card
                hoverable
                className="card-style"
                style={CardStyle}
                onClick={set_selection_for_nft_1}
                cover={<img alt="example" src={selectedNFT1.image} />}
              >
                <Meta
                  title={selectedNFT1.name}
                  description={selectedNFT1.description}
                />
              </Card>
            </div>
          ) : (
            <div
              className="flex-end-style"
              style={FlexEnd}
              onClick={set_selection_for_nft_1}
            >
              <Card hoverable style={EmptyCard}>
                Add an nft 1
              </Card>
            </div>
          )}
          {selectedNFT2 ? (
            <div className="flex-start-style" style={FlexStart}>
              <Card
                hoverable
                className="card-style"
                style={CardStyle}
                onClick={set_selection_for_nft_2}
                cover={<img alt="example" src={selectedNFT2.image} />}
              >
                <Meta
                  title={selectedNFT2.name}
                  description={selectedNFT2.description}
                />
              </Card>
              <div className="attributes-style" style={AttributeStyle}>
                <List
                  dataSource={selectedNFT2.attributes}
                  style={{ padding: 10 }}
                  grid={{
                    gutter: 5,
                    column: width < 700 ? 1 : 2,
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
          ) : (
            <div
              className="flex-end-style"
              style={FlexEnd}
              onClick={set_selection_for_nft_2}
            >
              <Card hoverable style={EmptyCard}>
                Add an nft 2
              </Card>
            </div>
          )}
        </div>
        {selectedNFT1 && selectedNFT2 && (
          <div style={{ margin: 20 }}>
            <Button style={ButtonStyle} onClick={() => setFuse(true)}>
              Fuse Alpha
            </Button>
          </div>
        )}
        {fuse && (
          <div className="content-wrap-style" style={ContentWrapStyle}>
            <div
              className="flex-start-style"
              style={{ ...FlexStart, justifyContent: "center" }}
            >
              <Card
                hoverable
                className="card-style"
                style={{ ...CardStyle, width: 300 }}
                cover={<img alt="example" src={selectedNFT1?.image} />}
              >
                <Meta
                  title={selectedNFT2?.name}
                  description={selectedNFT2?.description}
                />
              </Card>
              <div className="attributes-style" style={{ width: 150 }}>
                <List
                  dataSource={selectedNFT2?.attributes}
                  style={{ padding: 10 }}
                  grid={{
                    column: 1,
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
        )}
      </Content>
      <Modal
        footer={null}
        closable={false}
        mask={false}
        title="Select your nft to fuse"
        visible={visible}
        onCancel={() => {
          set_nft_selected(null);
          setVisible(false);
        }}
        width={600}
      >
        <div style={ModalStyles}>
          <List
            dataSource={filter_NFTs}
            style={{
              display: "flex",
              justifyContent: "center",
              height: "60vh",
            }}
            grid={{
              gutter: 10,
              column: width < 500 ? 1 : 2,
            }}
            renderItem={(item) => (
              <List.Item>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: 10,
                  }}
                >
                  <Card
                    onClick={() => {
                      nft_selected == NFT_SELECTED.Selected_1
                        ? setSelectedNFT1(item)
                        : setSelectedNFT2(item);
                      setVisible(false);
                    }}
                    hoverable
                    style={{ borderRadius: 10, width: 200 }}
                    cover={<img alt="example" src={item.image} />}
                  >
                    <Meta title={item.name} description={item.description} />
                  </Card>
                </div>
              </List.Item>
            )}
          />
        </div>
      </Modal>
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
  // overflowY: "scroll",
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

const EmptyCard: React.CSSProperties = {
  height: 400,
  width: 300,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 10,
  marginTop: 10,
};

const ModalStyles: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflowY: "scroll",
  overflowX: "hidden",
  padding: 10,
};

export default Fusion;
