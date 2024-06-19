import React from "react";
import { stocks } from "../data/stocks";
import { Stock } from "../types";
import { useStock } from "../context/StockContext";
import LabelButtonProps from "./Labels/LabelButtonProps";
const StockLists = () => {
  const { selectedStock, setSelectedStock } = useStock();
  const topFiveStock = stocks.slice(0, 5);
  const handleClick = async (stock: string) => {
    setSelectedStock(stock);
    console.log("Selected Stock: ", stock);
    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/logo?url=${stock}`
      );
      console.log(response);
    } catch (error) {
      console.error("Failed to fetch stock data", error);
    }
  };
  return (
    <div>
      <ul>
        {topFiveStock.map((stock: Stock) => (
          <LabelButtonProps
            label={stock.name}
            onClick={() => handleClick(stock.symbol)}
          />
        ))}
      </ul>
    </div>
  );
};

export default StockLists;
