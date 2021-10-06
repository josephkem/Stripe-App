import { Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Shop from "./pages/shop/Shop";
import SingleProduct from "./components/single-product/SingleProduct";
import CartPage from "./pages/cart-page/CartPage";
import Checkout from "./components/checkout/Checkout";
import Success from "./components/checkout/stripe-checkout/Success";
import Canceled from "./components/checkout/stripe-checkout/Canceled";
import SignUp from "./components/sign-up/SignUp";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/product/:id" component={SingleProduct} />
        <Route path="/cart" component={CartPage} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/success" component={Success} />
        <Route path="/canceled" component={Canceled} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
