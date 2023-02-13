import React, {useEffect, useState} from "react";
import ClassTimerComp from "./ClassTimerComp";
import FuntionTimerComp from "./FuntionTimerComp";

export default function UserEffectCleanUpComp() {
 const [showTimer, setTimer] = useState(false);


  return (
      <div>
        {showTimer && <FuntionTimerComp/>}
        <button onClick={() => setTimer(!showTimer)}>Timer</button>
      </div>
  )
}