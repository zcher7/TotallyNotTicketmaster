import React, {Fragment} from "react";
import './App.css';

// components

import InputTickets from "./components/InputTickets";
import ListTickets from "./components/ListTickets";

function App() {
  return <Fragment>
      <div className="container">
        <InputTickets />
        <ListTickets />
      </div>
    </Fragment>;
}

export default App;
