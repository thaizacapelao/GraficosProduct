import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
    {name: "Janeiro", Receitas: 10, Colheitas: 60},
    {name: 'Fevereiro', Receitas: 25, Colheitas: 70},
    {name: 'Março', Receitas: 15, Colheitas: 65},
    {name: 'Abril', Receitas: 35, Colheitas: 85},
    {name: 'Maio', Receitas: 12, Colheitas: 48},
    {name: 'Junho', Receitas: 30, Colheitas: 69},
    {name: 'Julho', Receitas: 15, Colheitas: 78},
]

const SimpleBarCharts = () => {
  return (
    <ResponsiveContainer width="50%" aspect={2}>
        <BarChart 
            data={data}
            width={500}
            height={300}
            margin={{
                top:50,
                right:30,
                left:20,
                bottom:0
            }}
        >
        <CartesianGrid vertical="" horizontal="" strokeDasharray="5 5" />    
        <XAxis dataKey="name"/>
        <YAxis />
        <Tooltip />
        <Legend
        iconType="circle"
         />
        <Bar dataKey="Receitas" fill="#133F65"/>
        <Bar dataKey="Colheitas" fill="#93b1cc"/>
        </BarChart>
    </ResponsiveContainer>
  )
}

export default SimpleBarCharts