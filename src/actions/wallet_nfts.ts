import { Connection } from "@metaplex/js";
import { Metadata, MetadataData } from "@metaplex-foundation/mpl-token-metadata";
import { TOKEN_PROGRAM_ID, Token } from "@solana/spl-token";
import { WalletContextState } from "@solana/wallet-adapter-react";
import { TransactionInstruction, Transaction, PublicKey } from "@solana/web3.js";
import { getManifestData } from "./helper";
import { NFT_Props } from "../data";

interface CustomMetadata extends MetadataData {
  manifest: NFT_Props;
}

export const get_all_nft_from_wallet = async (
  wallet: WalletContextState,
  connection: Connection,
) => {
  if (!wallet.publicKey) return;
  try {
    const raw_meta_data = await Metadata.findDataByOwner(connection, wallet.publicKey);
    let promise_arr: any[] = [];
    raw_meta_data.forEach((item) => {
      promise_arr.push(getManifestData(item.data.uri));
    });
    let resp: Array<NFT_Props> = await Promise.all(promise_arr);
    let meta_data: Array<CustomMetadata> = raw_meta_data.map((item, index) => {
      return { ...item, manifest: resp[index] };
    });
    return meta_data;
  } catch (error) {
    console.log("Error ", error);
  }
};

/// eg for signing transaction through wallet
/// eg for signing transaction through wallet
export const signTransactions = async (wallet: WalletContextState, connection: Connection) => {
  try {
    const instruction = new TransactionInstruction({
      keys: [
        {
          pubkey: new PublicKey("2VhzX3tx7tv5NzXWW7ui8jJUdfvoQp5iqvFG5NgqFea4"),
          isSigner: false,
          isWritable: false,
        },
      ],
      programId: TOKEN_PROGRAM_ID,
    });
    const trans = new Transaction().add(instruction);
    const id = await wallet.sendTransaction(trans, connection);

    await connection.confirmTransaction(id, "processed");
  } catch (error) {
    console.log("Error", error);
  }
};
