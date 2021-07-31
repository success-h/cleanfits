import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import Pricing from "./pages/Pricing";
import HowItWorks from "./pages/HowItWorksPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import FourOFour from "./pages/404";
import SignIn from "./pages/SignIn";

import { AppProvider } from "./Context";

// Admin pages ---> Authenticated routes
import AdminHome from "./pages/Admin";
import AdminLogin from "./pages/Admin/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <Suspense fallback={() => <p>loading...</p>}>
      <AppProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/how-it-works" component={HowItWorks} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={Register} />
            <Route path="/reset-password" component={ResetPassword} />
            <Route path="/admin" component={AdminHome} />
            <Route exact path="/admin/login" component={AdminLogin} />
            <Route component={FourOFour} />
          </Switch>
        </Router>
      </AppProvider>
    </Suspense>
  );
}

export default App;
