import { useEffect, useState } from "react";
import "./assets/styles/tailwind.css";
import SimpleLineCharts from "./charts/SimpleLineCharts";
import StockLists from "./components/StockLists";
import { useStock } from "./context/StockContext";
import { fetchStockData } from "./api/api";
import { StockData } from "./types";
import { stocks } from "./data/stocks";
import { StockDailyData } from "./components/StockDailyData";

function App() {
  const [stockData, setStockData] = useState<StockData | null>(null);

  function findStockBySymbol(symbol: string) {
    return stocks.find((stock) => stock.symbol === symbol)?.name;
  }
  const { selectedStock } = useStock();
  useEffect(() => {
    if (selectedStock) {
      fetchStockData(selectedStock).then((data) => {
        setStockData(data);
        console.log(data);
      });
    }
  }, [selectedStock]);

  return (
    <div className="bg-slate-50 ">
      <StockLists />
      {selectedStock && (
        <div>Selected Stock: {findStockBySymbol(selectedStock)}</div>
      )}
      <div>
        <div>
          {!stockData?.results ? (
            <div>No data</div>
          ) : (
            <div>
              <SimpleLineCharts stockData={stockData?.results} />
            </div>
          )}
        </div>
      </div>
      <div className="text-centertext-2xl">
        Stock Market Data
        <StockDailyData />
      </div>
    </div>
  );
}

export default App;
