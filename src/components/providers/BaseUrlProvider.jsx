import { createContext } from "react"

export const BaseUrlContext = createContext({});

export const BaseUrlProvider = props => {
  const { children } = props;
  const baseUrl = "https://railway.bulletinboard.techtrain.dev";

  return (
    <BaseUrlContext.Provider value={baseUrl}>
      {children}
    </BaseUrlContext.Provider>
  );
};