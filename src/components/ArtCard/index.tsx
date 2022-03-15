import React from "react";
import { Card, CardProps } from "antd";
import { MetadataData } from "@metaplex-foundation/mpl-token-metadata";
import { useCachedImage } from "../../hooks";
import { Image, Spin } from "antd";

export interface ArtCardProps extends CardProps {
  item: MetadataData;
}

export const ArtCard = (props: ArtCardProps) => {
  const { item, children, ...restProps } = props;
  const { cachedBlob, isLoading } = useCachedImage(item.data.uri);

  return (
    <>
      {isLoading ? (
        <Spin />
      ) : (
        <Card loading={isLoading} cover={<Image alt="example" src={cachedBlob} />} {...restProps}>
          {children}
        </Card>
      )}
    </>
  );
};
