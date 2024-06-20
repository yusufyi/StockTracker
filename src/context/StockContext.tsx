import React, { createContext, useContext, useState } from "react";

//default context will be AAPL

interface StockContextType {
  selectedStock: string | null;
  setSelectedStock: (stock: string) => void;
}

const StockContext = createContext<StockContextType | undefined>(undefined);

export const StockProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const defaultStock = "AAPL"; // Defaulting to Apple (AAPL)
  const [selectedStock, setSelectedStock] = useState<string | null>(
    defaultStock
  );
  return (
    <StockContext.Provider value={{ selectedStock, setSelectedStock }}>
      {children}
    </StockContext.Provider>
  );
};

//Custom context hook
export const useStock = () => {
  const context = useContext(StockContext);
  if (context === undefined) {
    throw new Error("useStock must be used within a StockProvider");
  }
  return context;
};

interface SearchPopUpProps {
  searchActive: boolean | false;
  setSearchActive: (active: boolean) => void;
}

const SearchPopupContext = createContext<SearchPopUpProps | undefined>(
  undefined
);
export const SearchPopupProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchActive, setSearchActive] = useState<boolean>(false);
  return (
    <SearchPopupContext.Provider value={{ searchActive, setSearchActive }}>
      {children}
    </SearchPopupContext.Provider>
  );
};

export const useSearchPopup = () => {
  const context = useContext(SearchPopupContext);
  if (context === undefined) {
    throw new Error("useSearchPopup must be used within a SearchPopupProvider");
  }
  return context;
};
