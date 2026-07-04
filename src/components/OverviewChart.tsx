import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, } from "recharts";
import { chartData } from "../data/financialData"
import type {Period} from "../types/period"

type OverviewChartProps = {
  period: Period;
};

function OverviewChart({ period }: OverviewChartProps) {
  const data = chartData[period];

  return (
    <ResponsiveContainer width="100%" height={320}>
      <LineChart data={data} margin={{top: 20,right: 20,left: 0,bottom: 0,}}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="income" name="Income" stroke="#22c55e" strokeWidth={3} dot={{ r: 4 }} />
        <Line type="monotone" dataKey="expenses" name="Expenses" stroke="#ef4444" strokeWidth={3} dot={{ r: 4 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default OverviewChart;