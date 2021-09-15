import { Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Shop from "./pages/shop/Shop";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
