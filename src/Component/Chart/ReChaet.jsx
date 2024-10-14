import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar, Tooltip, CartesianGrid } from "recharts";

const ReChart = () => {
  const monthlySales = [
    { ID: "January", Month: "January", Sales: 1224 },
    { ID: "February", Month: "February", Sales: 2192 },
    { ID: "March", Month: "March", Sales: 2392 },
    { ID: "April", Month: "April", Sales: 1729 },
    { ID: "May", Month: "May", Sales: 1853 },
    { ID: "June", Month: "June", Sales: 4571 },
    { ID: "July", Month: "July", Sales: 4980 },
    { ID: "August", Month: "August", Sales: 2839 },
    { ID: "Septem", Month: "September", Sales: 4137 },
    { ID: "October", Month: "October", Sales: 3198 },
    { ID: "Novem", Month: "November", Sales: 2811 },
    { ID: "December", Month: "December", Sales: 4034 }
];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={monthlySales}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={"ID"} />
        <YAxis />
        <Tooltip />
        <Bar dataKey="Sales" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ReChart;
