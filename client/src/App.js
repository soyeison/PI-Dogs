import { Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing/Landing";
import Principal from "./components/Principal/Principal";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Principal} />
    </div>
  );
}

export default App;
