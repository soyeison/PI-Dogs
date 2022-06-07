import { BrowserRouter, Route } from "react-router-dom";
import Buscador from "../Buscador/Buscador";
import Creator from "../Creator/Creator";
import Dog from "../Dog/Dog";
import Navbar from "../Navbar/Navbar";

export default function Principal(props) {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/home" component={Buscador} />
        <Route exact path="/creator" component={Creator} />
        <Route exact path="/home/:id" component={Dog} />
      </BrowserRouter>
    </div>
  );
}
