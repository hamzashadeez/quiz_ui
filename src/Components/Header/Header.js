import React from "react";
import "./Header.css";
import Button from "@material-ui/core/Button";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

function Header() {
  return (
    <div className="header">
      <div style={{ flex: 1 }}>
        <h4 id="headerText">Quiz</h4>
      </div>
      <div style={{display: "flex", alignItems: 'center'}}>
        <div className="time">
          <AccessTimeIcon style={{ color: 'rgb(45, 94, 108)' }} />
          <p>02:00:00</p>
        </div>
        <Button
          variant="contained"
          style={{
            backgroundColor: "rgb(6,177,145)",
            color: "rgb(187,234,225)",
            marginRight: "5px",
            paddingLeft: "35px",
            paddingRight: "35px",
            borderRadius: "15px",
          }}
        >
          SUBMIT
        </Button>
      </div>
    </div>
  );
}

export default Header;
