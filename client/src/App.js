import React, {Fragment} from "react";
import './App.css';
import Navbar from "./Navbar";

// components

import Tickets from "./tickets/Tickets";
import Users from "./users/Users";
import Home from "./home/Home";
import Queries from "./queries/Queries";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/tickets":
      component = <Tickets />;
      break;
    case "/users":
      component = <Users />;
      break;
    case "/queries":
      component = <Queries />;
      break;
  }
  return <Fragment>
      <div className="container">
        <Navbar />
        {component}
      </div>
    </Fragment>;
}

export default App;
