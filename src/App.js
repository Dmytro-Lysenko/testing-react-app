import { useState, useEffect } from "react";
import "./App.css";
import Async from "./components/Async";
import Greeting from "./components/Greeting";
import List from "./components/list/List";
import Search from "./components/search/Search";

const data = ["HTML", "CSS", "JS", "REACT.JS", "REDUX"];

function App() {
  const [search, setSearch] = useState();

  return (
    <div className="App">
      <Search value={search} onChange={(e) => setSearch(e.target.value)}>
        Find course:{" "}
      </Search>
      {/* <Greeting /> */}
      {/* <Async /> */}
      <List items={data} />
    </div>
  );
}

export default App;
