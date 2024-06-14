import React from "react";
import { stocks } from "../data/stocks";
import { Stock } from "../types";
import { useStock } from "../context/StockContext";
const StockLists = () => {
  const { selectedStock, setSelectedStock } = useStock();
  const topFiveStock = stocks.slice(0, 5);
  const handleClick = (stock: string) => {
    setSelectedStock(stock);
    console.log("Selected Stock: ", stock);
  };
  return (
    <div>
      <ul>
        {topFiveStock.map((stock: Stock) => (
          <li key={stock.symbol} onClick={() => handleClick(stock.symbol)}>
            {stock.symbol} - {stock.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockLists;
