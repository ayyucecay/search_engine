import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Select from 'react-select';

import React, { useState, useEffect } from "react";
import Search from "./components/Search/Search";
import Card from "./components/Card/Card";

import Filter from "./components/Filter/Filter";

function App() {
  
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  let [pageNumber, updatePageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");
  let [open, setOpen] = useState(false)

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  console.log(results);

  
  
  return (
    <div className="App">
      
      <div style={{display:"flex", padding:" 2% 2%"}}>
      <h1 className="text-center" style={{ flex:"2"}}>English Home</h1>
      <div onClick={() => setOpen(!open)} style={{flex: "5"}}>
        <Search setOpen={setOpen} setSearch={setSearch} updatePageNumber={updatePageNumber}/>
      </div>
      </div>
      {open?
      <div className="container">
        <div className="row">
          <Filter 
            pageNumber={pageNumber}
            status={status}
            updateStatus={updateStatus}
            updateGender={updateGender}
            updateSpecies={updateSpecies}
            updatePageNumber={updatePageNumber}
          />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Card results={results}/>
            </div>
          </div>
        </div>
      </div>:
      <div className="container">
         </div>
      }
     
    </div>
  );
}

export default App;
