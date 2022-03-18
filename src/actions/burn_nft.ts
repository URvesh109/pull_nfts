import { Transaction, PublicKey, Connection } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID, Token } from "@solana/spl-token";
import { WalletContextState } from "@solana/wallet-adapter-react";

/**
 * eg for signing transaction through wallet
 * @param wallet
 * @param connection
 * @param mintAdd
 * @param tokenAcccount
 * @returns
 */
export const burn_nft_transac = async (
  wallet: WalletContextState,
  connection: Connection,
  mintAdd: string,
  tokenAcccount: string,
) => {
  try {
    if (!wallet.publicKey) return;
    const mintAddress = new PublicKey(mintAdd);
    const tokenAcc = new PublicKey(tokenAcccount);
    let transactions = new Transaction();
    const burnInst = Token.createBurnInstruction(
      TOKEN_PROGRAM_ID,
      mintAddress,
      tokenAcc,
      wallet.publicKey,
      [],
      1,
    );

    const closeInstr = Token.createCloseAccountInstruction(
      TOKEN_PROGRAM_ID,
      tokenAcc,
      wallet.publicKey,
      wallet.publicKey,
      [],
    );

    transactions.add(burnInst);
    transactions.add(closeInstr);
    const id = await wallet.sendTransaction(transactions, connection);
    await connection.confirmTransaction(id, "processed");
  } catch (error) {
    console.log("Error", error);
    return Promise.reject();
  }
};
