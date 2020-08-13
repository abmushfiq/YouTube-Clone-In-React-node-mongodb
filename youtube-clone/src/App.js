import React from 'react';
import './App.css';
import HomePage from "./Pages/Homepage";
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import SearchPage from "./Pages/SearchPage";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <div className="app">

      <Router> 

        <Header />
      
        <Switch>

        <Route path="/"  exact component={HomePage}/>
        <Route path="/Search"  component={SearchPage}/>
  
        </Switch>
      </Router>
      
     {/* <HomePage /> */}

    </div>
  );
}

export default App;
