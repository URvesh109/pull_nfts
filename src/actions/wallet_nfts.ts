import { Connection } from "@metaplex/js";
import { Metadata, MetadataData } from "@metaplex-foundation/mpl-token-metadata";
import { TOKEN_PROGRAM_ID, Token } from "@solana/spl-token";
import { WalletContextState } from "@solana/wallet-adapter-react";
import { TransactionInstruction, Transaction, PublicKey } from "@solana/web3.js";
import { getManifestData } from "./helper";
import { NFT_Props } from "../data";
import { CustomMetadata } from "../types";

export const get_all_nft_from_wallet = async (
  wallet: WalletContextState,
  connection: Connection,
) => {
  if (!wallet.publicKey) return;
  try {
    const accounts = await connection.getParsedTokenAccountsByOwner(wallet.publicKey, {
      programId: TOKEN_PROGRAM_ID,
    });
    let metadata_promise: any[] = [];
    let balance_toke_acc: Array<string> = [];
    accounts.value.forEach(async (item) => {
      const mintAddress = item.account.data.parsed["info"]["mint"];
      const tokenAmount = item.account.data.parsed["info"]["tokenAmount"]["amount"];
      if (Number(tokenAmount) > 0) {
        balance_toke_acc.push(item.pubkey.toBase58());
        metadata_promise.push(Metadata.findByMint(connection, mintAddress));
      }
    });
    const raw_meta_data = await Promise.all(metadata_promise);
    let promise_arr: any[] = [];
    raw_meta_data.forEach((item) => {
      promise_arr.push(getManifestData(item.data.data.uri));
    });
    let resp: Array<NFT_Props> = await Promise.all(promise_arr);
    let meta_data: Array<CustomMetadata> = raw_meta_data.map((item, index) => {
      return {
        ...item.data,
        manifest: resp[index],
        tokenAccount: balance_toke_acc[index],
      };
    });
    console.log("Meta data ", meta_data);
    return meta_data;
  } catch (error) {
    console.log("Error ", error);
  }
};

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
