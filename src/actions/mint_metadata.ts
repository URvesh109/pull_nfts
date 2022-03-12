import { Metadata } from "@metaplex-foundation/mpl-token-metadata";
import { PublicKey, Connection } from "@solana/web3.js";

export const get_mint_metadata = async (connection: Connection) => {
  try {
    const tokenMint = "FRGEk6yYVPb4nWPmhA9VNUXrxKu5ovvmtG1X9V1HwqQG";
    const metaDataPDA = await Metadata.getPDA(new PublicKey(tokenMint));
    const tokenMetadata = await Metadata.load(connection, metaDataPDA);
    console.log("tokenMetadata", tokenMetadata);
  } catch (error) {
    console.log("Error is  ", error);
  }
};
