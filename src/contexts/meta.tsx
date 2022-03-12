import React, { useContext } from "react";
import * as anchor from "@project-serum/anchor";
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
  const candyMachine = process.env.REACT_APP_CANDY_MACHINE_ID;
  // console.log(candyMachine);
  return (
    <MetaContext.Provider value={themes.dark}>{children}</MetaContext.Provider>
  );
};

export const useMeta = () => {
  const context = useContext(MetaContext);
  return context as Color;
};
