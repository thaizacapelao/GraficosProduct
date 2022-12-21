import SimpleBarCharts from "./components/SimpleBarCharts";
import SimplePieCharts from "./components/SimplePieCharts";
import StackedAreaCharts from "./components/StackedAreaCharts";

function App() {
  return (
    <div>
     <h1 className="text-center text-7xl leading-12 font-italic">Estatísticas Atuais</h1>
     <SimpleBarCharts />
     <StackedAreaCharts />
     <SimplePieCharts />
    </div>
  );
}

export default App;