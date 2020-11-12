import React from "react";
import Header from "../Header/Header";
import "./Main.css";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import QuestionsNumber from "../QuestionsNumber/QuestionsNumber";
import Legends from "../Legends/Legends";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import QandA from "../QandA/QandA";
import Button from "@material-ui/core/Button";

export const Main = () => {
  return (
    <div className="main">
      <Header />
      <div className="block1">
        <div>
          <h5>Our Planet Earth</h5>
          <ErrorOutlineIcon style={{ color: "rgb(93,204,184)" }} />
        </div>
      </div>
      <div className="block2">
        <div className="sectionLabels">
          <h5 className="labels">Section A</h5>
          <h5 className="labels" id="unselected">
            Section B
          </h5>
        </div>
        <div className="stats">
          <p className="stat">Total Questions: 20</p>
          <p className="stat">Total Marks: 30</p>
        </div>
      </div>
      <div className="Maincontainer">
        <div
          style={{
            flex: 0.75,
            // borderRight: "2px solid rgb(200, 201, 201)",
            padding: 0,
            paddingRight: "20px",
          }}
        >
          <div className="markheader">
            <div>
              <div className="ln">
                <div className="circle">
                  <p id="Q4">Q4</p>
                </div>

                <h5 id="matching">Matching ( 4 Mark )</h5>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "rgb(179, 196, 236)",
                }}
              >
                <BookmarkIcon />
                <h5>Flag</h5>
              </div>
            </div>
          </div>
          <div>
            <QandA />
            <div className="btncon">
              <div className="left_btns">
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "rgb(208,240,234)",
                    color: "rgb(77,159,149)",
                    marginRight: "25px",
                    paddingLeft: "35px",
                    paddingRight: "35px",
                    borderRadius: "15px",
                  }}
                >
                  Previous
                </Button>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "rgb(229,229,229)",
                    color: "rgb(186,187,187)",
                    marginRight: "5px",
                    paddingLeft: "35px",
                    paddingRight: "35px",
                    borderRadius: "15px",
                  }}
                >
                  Clear
                </Button>
              </div>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "rgb(6,177,145)",
                  color: "#fff",
                  marginRight: "5px",
                  paddingLeft: "35px",
                  paddingRight: "35px",
                  borderRadius: "15px",
                }}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
        <div style={{ flex: 0.25, paddingLeft: "10px" }}>
          <div className="box">
            <h4 id="title">Section A (20) </h4>
            <QuestionsNumber />
            <Legends />
          </div>
        </div>
      </div>
    </div>
  );
};
