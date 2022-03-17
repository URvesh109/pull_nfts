import React from "react";
import { Card, CardProps } from "antd";
import { Image } from "antd";
import { NFT_Props } from "../../types";
export interface ArtCardProps extends CardProps {
  item: NFT_Props;
}

export const ArtCard = (props: ArtCardProps) => {
  const { item, children, ...restProps } = props;
  return (
    <>
      <Card cover={<Image preview={false} alt="example" src={item.image} />} {...restProps}>
        {children}
      </Card>
    </>
  );
};
