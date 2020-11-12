import React, {useEffect} from "react";
import "./QuestionsNumber.css";
import nums from "../../nums";
import Number from "../Number/Number";

function QuestionsNumber() {
    useEffect(()=>{
        console.log(nums['nums'])
    },[])
  return (
    <div className="QN">
      {nums['nums'].map((num) => (
          <Number color={num[1]} number={num[0]} />
      ))}
     
    </div>
  );
}

export default QuestionsNumber;
