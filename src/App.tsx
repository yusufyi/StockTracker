import { useEffect, useState } from "react";
import "./assets/styles/tailwind.css";
import SimpleLineCharts from "./charts/SimpleLineCharts";
import StockLists from "./components/StockLists";
import { useStock } from "./context/StockContext";
import { fetchStockData } from "./api/api";
import { StockData } from "./types";
function App() {
  const [stockData, setStockData] = useState<StockData | null>(null);

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
      {selectedStock && <div>Selected Stock: {selectedStock}</div>}
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
    </div>
  );
}

export default App;
