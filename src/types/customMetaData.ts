import { MetadataData } from "@metaplex-foundation/mpl-token-metadata";

export interface Creator_Props {
  address: string;
  share: number;
}

export interface File_Props {
  uri: string;
  type: string;
}

export interface Collection_Props {
  name: string;
  family: string;
}

export interface Attributes_Props {
  trait_type: string;
  value: string;
}

export interface Properties_Props {
  creators: Array<Creator_Props>;
  files: Array<File_Props>;
}

export interface NFT_Props {
  attributes: Array<Attributes_Props>;
  collection: Collection_Props;
  description: string;
  image: string;
  name: string;
  properties: Properties_Props;
  seller_fee_basis_points: number;
  symbol: string;
}

export interface CustomMetadata extends MetadataData {
  manifest: NFT_Props;
  tokenAccount: any;
}
