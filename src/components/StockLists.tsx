import React from "react";
import { stocks } from "../data/stocks";
import { Stock } from "../types";
import { useStock } from "../context/StockContext";
import LabelButtonProps from "./Labels/LabelButtonProps";
import "../styles/scrollbar.css";

const StockLists = () => {
  const { selectedStock, setSelectedStock } = useStock();
  const topFiveStock = stocks.slice(0, 10);
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
    <div className="flex w-full overflow-x-scroll  items-center h-24  scrollbar-hidden">
      <ul className="flex">
        {topFiveStock.map((stock: Stock) => (
          <li key={stock.symbol} className="flex-shrink-0">
            <LabelButtonProps
              label={stock.name}
              onClick={() => handleClick(stock.symbol)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockLists;
