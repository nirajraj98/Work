import React from "react";
import "./App.css";
import AxiosFetch from "./Component/fetch/AxiosFetch";
import AxiosFetchAsyns from "./Component/fetch/AxiosFetchAsyns";
import AxiosFetchB from "./Component/fetch/Bestaxios/AxiosFetchB";


function App() {
  return (
    <div className="App">
      <AxiosFetchB/>
      <h3>niraj</h3>

      <AxiosFetchAsyns/>
      <h3>niraj</h3>
      <AxiosFetch />
    </div>
  );
}

export default App;
