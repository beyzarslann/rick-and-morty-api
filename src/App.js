import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";
import Filters from "./components/Filters/Filters";

function App() {
  let [pageNumber, setPageNumber] = useState(1);
  const totalPages = 42;
  let [fetchData, setFetchData] = useState([]);
  let { info, results } = fetchData;
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function fetchData() {
      let data = await fetch(api).then((res) => res.json());
      setFetchData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1>Rick and Morty</h1>

      <div className="app-container">
        <Filters
          setSpecies={setSpecies}
          setGender={setGender}
          setStatus={setStatus}
          setPageNumber={setPageNumber}
        />

        <div className="characters-table">
          <Characters characters={results} />

          <div className="pagination-container">
            <Pagination
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              totalPages={totalPages}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
