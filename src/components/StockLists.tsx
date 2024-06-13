import React from "react";
import { stocks } from "../data/stocks";
import { Stock } from "../types";
const StockLists = () => {
  const topFiveStock = stocks.slice(0, 5);
  return (
    <div>
      <ul>
        {topFiveStock.map((stock: Stock) => (
          <li key={stock.symbol}>
            {stock.symbol} - {stock.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockLists;
