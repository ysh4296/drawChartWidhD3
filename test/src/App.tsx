import "./App.css";
import drawChart from "./chart/draw/drawChart";

function App() {
  drawChart();
  return (
    <div className="App">
      <div id="root" style={{ margin: "50px" }}></div>
    </div>
  );
}

export default App;
