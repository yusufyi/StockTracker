import React, { createContext, useContext, useState } from "react";

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
