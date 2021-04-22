import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import './App.css';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CountriesList />


      <Switch>
        <Route exact path="/country/:potato" component={CountryDetails} />


      </Switch>

    </div>
  );
}

export default App;
