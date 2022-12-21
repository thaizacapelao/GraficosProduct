import { borderRadius } from 'polished';
import { PieChart, ResponsiveContainer, Pie, Tooltip, Cell } from 'recharts'

import { RadialBarChart, RadialBar, Legend } from "recharts";

const data = [
  {
    name: "Colheitas",
    uv: 31.47,
    pv: 2400,
    fill: "#93b1cc"
  },
  {
    name: "Receitas",
    uv: 26.69,
    pv: 4567,
    fill: "#133F65"
  },
];

const style = {
  top: 110,
  left: 300,
  lineHeight: "34px"
};

export default function App() {
  return (
    <RadialBarChart
      width={600}
      height={600}
      cx={150}
      cy={150}
      innerRadius={80}
      outerRadius={130}
      barSize={11}
      data={data}
    >
      <RadialBar
        minAngle={15}
        label={{ position: "insideStart", fill: "#fff" }}
        background
        clockWise
        dataKey="uv"
      />
      <Legend
        iconSize={15}
        iconType="circle"
        width={120}
        height={140}
        layout="vertical"
        verticalAlign="middle"
        wrapperStyle={style}
      />
    </RadialBarChart>
  );
}