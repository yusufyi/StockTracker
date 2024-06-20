import React, { useEffect } from "react";
import { stocks } from "../data/stocks";
import { useStock, useSearchPopup } from "../context/StockContext";
export const SearchStock = () => {
  const { selectedStock, setSelectedStock } = useStock();
  const { searchActive, setSearchActive } = useSearchPopup();
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [searchResults, setSearchResults] = React.useState<
    { symbol: string; name: string }[]
  >([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    !searchActive && setSearchActive(true);

    console.log(searchTerm);
    const results = stocks.filter((stock) =>
      stock.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="w-full flex flex-col  items-center m-5  h-24 justify-center">
      <div className="w-96 mt-8  ">
        <input
          className=" w-full flex  p-3   rounded-full bg-slate-50 items-center "
          type="text"
          placeholder="Search stock"
          onChange={(e) => handleChange(e)}
          onClick={() => setSearchActive(!searchActive)}
        />
      </div>
      <div className=" z-50 absolute  w-[600px] top-24   max-h-[700px] overflow-scroll shadow-lg  rounded-2xl">
        {searchActive && (
          <div className=" bg-white ">
            <ul>
              {searchResults.map((stock: { symbol: string; name: string }) => (
                <li
                  key={stock.symbol}
                  className="hover:bg-slate-200  cursor-pointer  h-16 justify-between border-b flex items-center p-2"
                  onClick={() => {
                    setSelectedStock(stock.symbol);
                    setSearchActive(false);
                  }}
                >
                  <span className="mr-4">{stock.symbol}</span>
                  <span className="flex-1">{stock.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
