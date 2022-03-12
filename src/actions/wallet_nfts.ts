import { Connection } from "@metaplex/js";
import { Metadata } from "@metaplex-foundation/mpl-token-metadata";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { WalletContextState } from "@solana/wallet-adapter-react";
import {
  TransactionInstruction,
  Transaction,
  PublicKey,
} from "@solana/web3.js";

export const get_all_nft_from_wallet = async (
  wallet: WalletContextState,
  connection: Connection
) => {
  if (!wallet.publicKey) return;
  try {
    const nftsmetadata = await Metadata.findDataByOwner(
      connection,
      wallet.publicKey
    );

    console.log(nftsmetadata);
  } catch (error) {
    console.log("Error ", error);
  }
};

/// eg for signing transaction through wallet
export const signTransactions = async (
  wallet: WalletContextState,
  connection: Connection
) => {
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
