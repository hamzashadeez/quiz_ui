import React from "react";
import "./QandA.css";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import Draggable from "react-draggable";
import SoundEffect from '../../Assets/sound.mp3'
import useSound from 'use-sound';

function QandA() {
 
    const [play] = useSound(SoundEffect);

  return (
    <div className="QandA">
      <div className="questions">
        <p
          style={{
            margin: 0,
            fontSize: "14px",
            fontWeight: 600,
            color: "rgb(79,89,89)",
          }}
        >
          Match the following
        </p>
        <div className="field">
          <p>Drag & and Drop answer choices to their maching answers</p>
          <div className="dragCont">
            <div className="label">
              <p>Radius of Earth</p>
            </div>
            <div className="drop"></div>
          </div>
          <div className="dragCont">
            <div className="label">
              <p>Earths Water percentage</p>
            </div>
            <div className="drop"></div>
          </div>
          <div className="dragCont">
            <div className="label">
              <p>Story of Earth</p>
            </div>
            <div className="drop"></div>
          </div>
        </div>
      </div>
      <div className="answers">
        <p>Answer Choices</p>
        <div>
          <Draggable onStop={play}>
            <div className="draggble">
              <DragIndicatorIcon />
              <p>Geology</p>
            </div>
          </Draggable>
          <Draggable onStop={play}>
            <div className="draggble">
              <DragIndicatorIcon />
              <p>71%</p>
            </div>
          </Draggable>
          <Draggable onStop={play}>
            <div className="draggble">
              <DragIndicatorIcon />
              <p>6371 km</p>
            </div>
          </Draggable>
          <Draggable onStop={play}>
            <div className="draggble">
              <DragIndicatorIcon />
              <p>73%</p>
            </div>
          </Draggable>
        </div>
      </div>
    </div>
  );
}

export default QandA;
