import { Route } from "react-router-dom";
import "./App.css";
import Buscador from "./components/Buscador/Buscador";
import Creator from "./components/Creator/Creator";
import Dog from "./components/Dog/Dog";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Landing} />
      <Route path="/" component={Navbar} />
      <Route path="/home" exact component={Buscador} />
      {/*       <Route path="/home" exact component={Paginado} /> */}
      <Route path="/creator" component={Creator} />
      <Route path="/home/:id" exact component={Dog} />
    </div>
  );
}

export default App;
