import { React, useEffect, useState } from "react";
import { useStock } from "../context/StockContext";
import dateFormat, { masks } from "dateformat";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// const data = [
//   // {
//   //   name: "Page A",
//   //   uv: 4000,
//   //   pv: 2400,
//   //   amt: 2400,
//   // },
// ];

const SimpleLineCharts = (stockData) => {
  const [stock, setStock] = useState();
  const [data, setData] = useState([]);
  useEffect(() => {
    setStock(stockData.stockData);
    if (stock) {
      console.log("stockData", stock);
      try {
        setData([]);
        for (let i = 0; i < stock.length; i++) {
          const toDate = new Date(stock[i].t);
          // data.push({
          //   name: dateFormat(toDate, "dd/mm"),
          //   uv: stock[i].c,
          //   pv: stock[i].o,
          //   amt: stock[i].o,
          // });
          setData((prev) => [
            ...prev,
            {
              name: dateFormat(toDate, "dd/mm"),
              uv: stock[i].c,
              pv: stock[i].o,
              amt: stock[i].o,
            },
          ]);
        }
      } catch (error) {
        console.log("error", error);
      }
    }
  }, [stockData]);
  if (data.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleLineCharts;
