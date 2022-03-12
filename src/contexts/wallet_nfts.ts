import { Connection } from "@metaplex/js";
import { Metadata } from "@metaplex-foundation/mpl-token-metadata";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { WalletContextState } from "@solana/wallet-adapter-react";
import {
  TransactionInstruction,
  Transaction,
  PublicKey,
} from "@solana/web3.js";

export const pullAll_NFT_WALlET = async () => {
  const connection = new Connection("devnet");
  const ownerPublickey = "F53Z5hbWa7sMcbwQRu3QYH7H9wjDE5NnH69N4n7cRFnU";
  try {
    // const nftsmetadata = await Metadata.findMany(connection, {
    //   creators: [ownerPublickey],
    // });

    const nftsmetadata = await Metadata.findDataByOwner(
      connection,
      ownerPublickey
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
