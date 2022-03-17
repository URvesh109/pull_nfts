import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { WalletContextState } from "@solana/wallet-adapter-react";
import { get_mint_metadata } from "./mint_metadata";
import { Connection } from "@solana/web3.js";
import { Metadata } from "@metaplex-foundation/mpl-token-metadata";
import BN from "bn.js";

export const fetch_accounts = async (wallet: WalletContextState, connection: Connection) => {
  if (!wallet.publicKey) return;

  const accounts = await connection.getParsedTokenAccountsByOwner(wallet.publicKey, {
    programId: TOKEN_PROGRAM_ID,
  });

  accounts.value.forEach((item) => {
    console.log("Value is ", item.pubkey.toBase58());
  });

  // const metadataPdaLookups = accounts.reduce((memo, { data }) => {
  //   // Only include tokens where amount equal to 1.
  //   // Note: This is not the same as mint supply.
  //   // NFTs by definition have supply of 1, but an account balance > 1 implies a mint supply > 1.
  //   return data.amount?.eq(new BN(1))
  //     ? [...memo, Metadata.getPDA(data.mint)]
  //     : memo;
  // }, []);
};
