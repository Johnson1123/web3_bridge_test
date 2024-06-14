import { useEffect, useState } from "react";
import { Bar } from "recharts";

const Home = () => {
  let [data] = useState(window.localStorage.getItem("finance"));
  const [chart, setChart] = useState({})

  useEffect(() => {
    if (data) {
      const dt = JSON.parse(window.localStorage.getItem("finance") as any);

      const expense = dt
        .filter((item: any) => item.type == "expenses")
        .reduce((total: any, num: any) => total + parseInt(num.amount), 0);

      const savings = dt
        .filter((item: any) => item.type == "savings")
        .reduce((total: any, num: any) => total + parseInt(num.amount), 0);

      setChart({"expenses": expense, "savings": savings})
    }
  }, [data]);

  return <div>
    <Bar data={chart}
  </div>;
};

export default Home;
