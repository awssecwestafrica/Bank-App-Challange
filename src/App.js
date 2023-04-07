import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateUser from "./components/CreateUser";
import AllOurCustomers from "./components/AllOurCustomers";
import Transfer from "./components/Transfer";
import Transactions from "./components/Transactions";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/create-user">
          <CreateUser />
        </Route>
        <Route path="/all-our-customers">
          <AllOurCustomers />
        </Route>
        <Route path="/transfer">
          <Transfer />
        </Route>
        <Route path="/transactions-history">
          <Transactions />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
