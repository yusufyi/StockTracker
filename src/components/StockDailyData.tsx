import React, { useEffect, useState } from "react";
import { StockDataDaily } from "../types";
import { useStock } from "../context/StockContext";
const apiKeys = process.env.REACT_APP_API_KEY;

export const StockDailyData = () => {
  const { selectedStock } = useStock();
  const [stockData, setStockData] = useState<StockDataDaily | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const tod = new Date();
  tod.setDate(tod.getDate() - 1);

  const date = tod.toISOString().split("T")[0];
  console.log(date);
  useEffect(() => {
    const fetchStockData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.polygon.io/v1/open-close/${selectedStock}/${date}?adjusted=true&apiKey=${apiKeys}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch stock data");
        }
        const data = await response.json();
        setStockData(data);
      } catch (error) {
        console.error("Failed to fetch stock data", error);
      } finally {
        setLoading(false);
      }
    };
    if (selectedStock) {
      fetchStockData();
    }
  }, [selectedStock]);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!stockData) {
    return <div>No data</div>;
  }
  return (
    <div className="flex flex-col  items-start p-4 text-sm divide-y w-full  ">
      <h2 className="w-full font-bold"> Stock Market Data</h2>
      <h1 className="w-full">{stockData.symbol}</h1>
      <p className="w-full">Date: {stockData.from}</p>
      <p className="w-full">Open: {stockData.open}</p>
      <p className="w-full">High: {stockData.high}</p>
      <p className="w-full">Low: {stockData.low}</p>
      <p className="w-full">Close: {stockData.close}</p>
      <p className="w-full">Volume: {stockData.volume}</p>
      <p className="w-full">After Hours: {stockData.afterHours}</p>
      <p className="w-full">Pre Market: {stockData.preMarket}</p>
    </div>
  );
};
