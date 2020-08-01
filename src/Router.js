import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Preloader from "./components/Preloader";
import Contact from "./pages/contact";
const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));

function App() {
  return (
    <Suspense fallback={<Preloader />}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
