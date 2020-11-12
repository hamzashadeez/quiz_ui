import React from "react";
import Number from "../Number/Number";
import "./Legends.css";

function Legends() {
  return (
    <div className="legends">
      <h5 style={{margin: 0}}>Legends & Stats</h5>
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          padding: '0 10px',
          marginTop: 0
        }}
      >
        <div className="row1">
          <Number number='13' color='rgb(102,186, 172)' />
          <p>Answered</p>
        </div>
        <div className="row1">
          <Number number='4' color='rgb(243,163,180)'/>
          <p>Not Answered</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          padding: '0 10px',
        }}
      >
        <div className="row1">
          <Number number='2' color='rgb(222,223,223)'/>
          <p>Not Visited</p>
        </div>
        <div className="row1">
          <Number number='1' color='rgb(179, 196, 236)'/>
          <p>Flagged</p>
        </div>
      </div>
    </div>
  );
}

export default Legends;
