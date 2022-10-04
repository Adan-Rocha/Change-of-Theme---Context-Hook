import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./assets/main.css";
import Home from "./pages/Home";
import Page_02 from "./pages/Page_02";
import { ThemeProvider } from "./utilities/ThemeContext";

function App() {
  return (
    
      <BrowserRouter>
        <ThemeProvider>
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
        <Switch>
          <Route path='/Page_02' exact component={Page_02} />
        </Switch>
        </ThemeProvider>
      </BrowserRouter>
    );
}

export default App;
