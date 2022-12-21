import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
    {name: "Janeiro", Colheitas: 10, Receitas: 60},
    {name: 'Fevereiro', Colheitas: 25, Receitas: 70},
    {name: 'Março', Colheitas: 15, Receitas: 65},
    {name: 'Abril', Colheitas: 35, Receitas: 85},
    {name: 'Maio', Colheitas: 12, Receitas: 48},
    {name: 'Junho', Colheitas: 30, Receitas: 69},
    {name: 'Julho', Colheitas: 15, Receitas: 78},
]

const StackedAreaCharts = () => {
  return (
    <ResponsiveContainer width="50%" aspect={2}>
        <AreaChart
            width={500}
            height={400}
            data={data}
            
            margin={{
                top:80,
                right:30,
                left:0,
                bottom:0 
            }}
        >
            <CartesianGrid vertical="" horizontal="" strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="Colheitas" stackId="1" strokeWidth="4" stroke='#93b1cc' fill="transparent" />
            <Area type="monotone" dataKey="Receitas" stackId="1" strokeWidth="4" stroke='#133F65' fill="transparent" />
        </AreaChart>
    </ResponsiveContainer>
  )
}

export default StackedAreaCharts