import React, { createContext, useState, ReactNode } from "react";

type AppContextProps = {
  children: ReactNode;
};
export type recipieObj = {
  rank: string;
  fileName?: string;
};
interface IAssetContextProps {
  searchString: string;
  setSearchString: (val: string) => void;
  searchResults: recipieObj[];
  setSearchResults: (val: recipieObj[]) => void;
  recipie: string;
  setRecipie: (val: string) => void;
}

export const AppDetailsContext = createContext({} as IAssetContextProps);

const AssetInfoProvider = ({ children }: AppContextProps) => {
  const [searchString, setSearchString] = useState<string>("");
  const [searchResults, setSearchResults] = useState<any>([]);
  const [recipie, setRecipie] = useState<string>("");
  return (
    <AppDetailsContext.Provider
      value={{
        searchString,
        setSearchString,
        searchResults,
        setSearchResults,
        recipie,
        setRecipie,
      }}
    >
      {children}
    </AppDetailsContext.Provider>
  );
};
export default AssetInfoProvider;
