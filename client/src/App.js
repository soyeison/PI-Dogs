import { Route } from "react-router-dom";
import "./App.css";
import Buscador from "./components/Buscador/Buscador";
import Landing from "./components/Landing/Landing";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route path="/home" component={Buscador} />
    </div>
  );
}

export default App;
