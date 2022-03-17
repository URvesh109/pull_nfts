import One from "./assets/images/0.png";
import Two from "./assets/images/1.png";
import Three from "./assets/images/2.png";
import Four from "./assets/images/3.png";
import Five from "./assets/images/4.png";
import Six from "./assets/images/5.png";
import Seven from "./assets/images/6.png";
import Eight from "./assets/images/7.png";
import Nine from "./assets/images/8.png";
import Ten from "./assets/images/9.png";

import { MetadataData, Metadata } from "@metaplex-foundation/mpl-token-metadata";

export const decodeMetadata = (buffer: Buffer): Metadata => {
  return MetadataData.deserialize(buffer);
};

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

export const nfts: Array<NFT_Props> = [
  {
    name: "Number #0001",
    symbol: "NB",
    description: "Collection of 10 numbers on the blockchain. This is the number 1/10.",
    seller_fee_basis_points: 500,
    image: One,
    attributes: [
      { trait_type: "Layer-1", value: "0" },
      { trait_type: "Layer-2", value: "0" },
      { trait_type: "Layer-3", value: "0" },
      { trait_type: "Layer-4", value: "1" },
    ],
    properties: {
      creators: [{ address: "6j4nNrozTJkk1zatiXHezSLZArnRUq3WkGKHACThXGpZ", share: 100 }],
      files: [{ uri: "0.png", type: "image/png" }],
    },
    collection: { name: "numbers", family: "numbers" },
  },
  {
    name: "Number #0002",
    symbol: "NB",
    description: "Collection of 10 numbers on the blockchain. This is the number 2/10.",
    seller_fee_basis_points: 500,
    image: Two,
    attributes: [
      { trait_type: "Layer-1", value: "0" },
      { trait_type: "Layer-2", value: "0" },
      { trait_type: "Layer-3", value: "0" },
      { trait_type: "Layer-4", value: "2" },
    ],
    properties: {
      creators: [{ address: "6j4nNrozTJkk1zatiXHezSLZArnRUq3WkGKHACThXGpZ", share: 100 }],
      files: [{ uri: "1.png", type: "image/png" }],
    },
    collection: { name: "numbers", family: "numbers" },
  },
  {
    name: "Number #0003",
    symbol: "NB",
    description: "Collection of 10 numbers on the blockchain. This is the number 3/10.",
    seller_fee_basis_points: 500,
    image: Three,
    attributes: [
      { trait_type: "Layer-1", value: "0" },
      { trait_type: "Layer-2", value: "0" },
      { trait_type: "Layer-3", value: "0" },
      { trait_type: "Layer-4", value: "3" },
    ],
    properties: {
      creators: [{ address: "6j4nNrozTJkk1zatiXHezSLZArnRUq3WkGKHACThXGpZ", share: 100 }],
      files: [{ uri: "2.png", type: "image/png" }],
    },
    collection: { name: "numbers", family: "numbers" },
  },
  {
    name: "Number #0004",
    symbol: "NB",
    description: "Collection of 10 numbers on the blockchain. This is the number 4/10.",
    seller_fee_basis_points: 500,
    image: Four,
    attributes: [
      { trait_type: "Layer-1", value: "0" },
      { trait_type: "Layer-2", value: "0" },
      { trait_type: "Layer-3", value: "0" },
      { trait_type: "Layer-4", value: "4" },
    ],
    properties: {
      creators: [{ address: "6j4nNrozTJkk1zatiXHezSLZArnRUq3WkGKHACThXGpZ", share: 100 }],
      files: [{ uri: "3.png", type: "image/png" }],
    },
    collection: { name: "numbers", family: "numbers" },
  },
  {
    name: "Number #0005",
    symbol: "NB",
    description: "Collection of 10 numbers on the blockchain. This is the number 5/10.",
    seller_fee_basis_points: 500,
    image: Five,
    attributes: [
      { trait_type: "Layer-1", value: "0" },
      { trait_type: "Layer-2", value: "0" },
      { trait_type: "Layer-3", value: "0" },
      { trait_type: "Layer-4", value: "5" },
    ],
    properties: {
      creators: [{ address: "6j4nNrozTJkk1zatiXHezSLZArnRUq3WkGKHACThXGpZ", share: 100 }],
      files: [{ uri: "4.png", type: "image/png" }],
    },
    collection: { name: "numbers", family: "numbers" },
  },
  {
    name: "Number #0006",
    symbol: "NB",
    description: "Collection of 10 numbers on the blockchain. This is the number 6/10.",
    seller_fee_basis_points: 500,
    image: Six,
    attributes: [
      { trait_type: "Layer-1", value: "0" },
      { trait_type: "Layer-2", value: "0" },
      { trait_type: "Layer-3", value: "0" },
      { trait_type: "Layer-4", value: "6" },
    ],
    properties: {
      creators: [{ address: "6j4nNrozTJkk1zatiXHezSLZArnRUq3WkGKHACThXGpZ", share: 100 }],
      files: [{ uri: "5.png", type: "image/png" }],
    },
    collection: { name: "numbers", family: "numbers" },
  },
  {
    name: "Number #0007",
    symbol: "NB",
    description: "Collection of 10 numbers on the blockchain. This is the number 7/10.",
    seller_fee_basis_points: 500,
    image: Seven,
    attributes: [
      { trait_type: "Layer-1", value: "0" },
      { trait_type: "Layer-2", value: "0" },
      { trait_type: "Layer-3", value: "0" },
      { trait_type: "Layer-4", value: "7" },
    ],
    properties: {
      creators: [{ address: "6j4nNrozTJkk1zatiXHezSLZArnRUq3WkGKHACThXGpZ", share: 100 }],
      files: [{ uri: "6.png", type: "image/png" }],
    },
    collection: { name: "numbers", family: "numbers" },
  },
  {
    name: "Number #0008",
    symbol: "NB",
    description: "Collection of 10 numbers on the blockchain. This is the number 8/10.",
    seller_fee_basis_points: 500,
    image: Eight,
    attributes: [
      { trait_type: "Layer-1", value: "0" },
      { trait_type: "Layer-2", value: "0" },
      { trait_type: "Layer-3", value: "0" },
      { trait_type: "Layer-4", value: "8" },
    ],
    properties: {
      creators: [{ address: "6j4nNrozTJkk1zatiXHezSLZArnRUq3WkGKHACThXGpZ", share: 100 }],
      files: [{ uri: "7.png", type: "image/png" }],
    },
    collection: { name: "numbers", family: "numbers" },
  },
  {
    name: "Number #0009",
    symbol: "NB",
    description: "Collection of 10 numbers on the blockchain. This is the number 9/10.",
    seller_fee_basis_points: 500,
    image: Nine,
    attributes: [
      { trait_type: "Layer-1", value: "0" },
      { trait_type: "Layer-2", value: "0" },
      { trait_type: "Layer-3", value: "0" },
      { trait_type: "Layer-4", value: "9" },
    ],
    properties: {
      creators: [{ address: "6j4nNrozTJkk1zatiXHezSLZArnRUq3WkGKHACThXGpZ", share: 100 }],
      files: [{ uri: "8.png", type: "image/png" }],
    },
    collection: { name: "numbers", family: "numbers" },
  },
  {
    name: "Number #0010",
    symbol: "NB",
    description: "Collection of 10 numbers on the blockchain. This is the number 10/10.",
    seller_fee_basis_points: 500,
    image: Ten,
    attributes: [
      { trait_type: "Layer-1", value: "0" },
      { trait_type: "Layer-2", value: "0" },
      { trait_type: "Layer-3", value: "1" },
      { trait_type: "Layer-4", value: "0" },
    ],
    properties: {
      creators: [{ address: "6j4nNrozTJkk1zatiXHezSLZArnRUq3WkGKHACThXGpZ", share: 100 }],
      files: [{ uri: "9.png", type: "image/png" }],
    },
    collection: { name: "numbers", family: "numbers" },
  },
];

export function filterNft(name = ""): Array<NFT_Props> {
  return nfts.filter((nft) => nft.name != name);
}
