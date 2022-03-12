import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { Connection } from "@metaplex/js";
import { WalletContextState } from "@solana/wallet-adapter-react";

export const fetch_accounts = async (
  wallet: WalletContextState,
  connection: Connection
) => {
  if (!wallet.publicKey) return;

  const accounts = await connection.getParsedProgramAccounts(TOKEN_PROGRAM_ID, {
    filters: [
      {
        dataSize: 165,
      },
      {
        memcmp: {
          offset: 32,
          bytes: wallet.publicKey.toBase58(),
        },
      },
    ],
  });

  console.log(
    `Found ${
      accounts.length
    } token accounts(s) for wallet ${wallet.publicKey.toBase58()}`
  );

  accounts.forEach((account, i) => {
    console.log(`Token account address ${i + 1}: ${account.pubkey.toString()}`);
  });
};
