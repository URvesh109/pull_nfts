import React, { createContext, useContext, useEffect } from "react";
import { PublicKey } from "@solana/web3.js";
import * as anchor from "@project-serum/anchor";
import { pullAll_NFT_WALlET } from "./wallet_nfts";
interface Color {
  foreground: string;
  background: string;
}

interface ThemeContextState {
  light: Color;
  dark: Color;
}

const themes: ThemeContextState = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

export const CANDY_MACHINE_PROGRAM = new anchor.web3.PublicKey(
  "cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ"
);

const MetaContext = React.createContext<Color | null>(null);

export const MetaProvider = ({
  children = null,
}: {
  children: React.ReactNode;
}) => {
  // const candyMachine = process.env.REACT_APP_CANDY_MACHINE_ID;
  const candyMachine = new anchor.web3.PublicKey(
    "H5Hwwitjxmeg9PhDmJdXanTMrCnYqRAV7bibnmBT4p3f"
  );
  useEffect(() => {
    pullAll_NFT_WALlET();
  }, [candyMachine]);
  // fetch nfts relevant to candy machine

  return (
    <MetaContext.Provider value={themes.dark}>{children}</MetaContext.Provider>
  );
};

export const useMeta = () => {
  const context = useContext(MetaContext);
  return context as Color;
};
