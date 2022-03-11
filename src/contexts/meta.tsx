import React, { createContext, useContext } from "react";

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

const MetaContext = React.createContext<Color | null>(null);

export const MetaProvider = ({
  children = null,
}: {
  children: React.ReactNode;
}) => {
  // fetch nfts relevant to candy machine

  return (
    <MetaContext.Provider value={themes.dark}>{children}</MetaContext.Provider>
  );
};

export const useMeta = () => {
  const context = useContext(MetaContext);
  return context as Color;
};
