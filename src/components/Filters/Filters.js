import React from "react";
import Gender from "../Filters/Category/Gender";
import Species from "../Filters/Category/Species";
import Status from "../Filters/Category/Status";

const Filters = ({ setStatus, setPageNumber, setGender, setSpecies }) => {
  let clear = () => {
    setStatus("");
    setPageNumber("");
    setGender("");
    setSpecies("");
    window.location.reload(false);
  };
  return (
    <div className="container">
      <div className="filters">
        <div className="filt"> FİLTERS </div>
        <div onClick={clear} style={{ cursor: "pointer" }} className="clear">
          Clear Filters
        </div>
        <div className="accordion" id="accordionExample">
          <Status setPageNumber={setPageNumber} setStatus={setStatus} />
          <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
          <Gender setGender={setGender} setPageNumber={setPageNumber} />
        </div>
      </div>
    </div>
  );
};

export default Filters;
