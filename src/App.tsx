import { useEffect, useState } from "react";
import "./assets/styles/tailwind.css";
import SimpleLineCharts from "./charts/SimpleLineCharts";
import StockLists from "./components/StockLists";
import Headers from "./components/Headers";
import { useStock, useSearchPopup } from "./context/StockContext";
import { fetchStockData } from "./api/api";
import { StockData } from "./types";
import { stocks } from "./data/stocks";
import { StockDailyData } from "./components/StockDailyData";
import { StockNews } from "./components/StockNews";

function App() {
  const [stockData, setStockData] = useState<StockData | null>(null);
  const { searchActive, setSearchActive } = useSearchPopup();

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
    // make disabled page if saerchActive is true
    <div>
      <Headers />
      <div
        className={searchActive ? "blur cursor-not-allowed " : ""}
        onClick={() => setSearchActive(false)}
      >
        <StockLists />
        {selectedStock && (
          <div className="w-full flex items-center font-bold text-2xl border justify-center">
            {findStockBySymbol(selectedStock)}
          </div>
        )}
        <div>
          <div>
            {!stockData?.results ? (
              <div>No data</div>
            ) : (
              <SimpleLineCharts stockData={stockData?.results} />
            )}
          </div>
        </div>

        <StockDailyData />

        <StockNews />
      </div>
    </div>
  );
}

export default App;
