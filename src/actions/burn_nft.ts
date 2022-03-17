import { Transaction, PublicKey, Connection } from "@solana/web3.js";
// eslint-disable-next-line
import { TOKEN_PROGRAM_ID, Token } from "@solana/spl-token";
// eslint-enable

import { WalletContextState } from "@solana/wallet-adapter-react";

/// eg for signing transaction through wallet
export const burn_nft_transac = async (wallet: WalletContextState, connection: Connection) => {
  try {
    if (!wallet.publicKey) return;
    const mintAddress = new PublicKey("J79mEoxTGMmcDDdg9kpfbiGJsht7LNyQnW95Ukdgw5z");
    const tokenAcc = new PublicKey("GDynRFDp2kffvJtNQpjchgBA6jJFtwgovD4dakeqbrpw");
    let transactions = new Transaction();
    const burnInst = Token.createBurnInstruction(
      TOKEN_PROGRAM_ID,
      mintAddress,
      tokenAcc,
      wallet.publicKey,
      [],
      1,
    );

    transactions.add(burnInst);
    const id = await wallet.sendTransaction(transactions, connection);
    const tx = await connection.confirmTransaction(id, "processed");
  } catch (error) {
    console.log("Error", error);
  }
};
