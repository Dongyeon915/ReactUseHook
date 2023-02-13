import React, {useEffect, useRef, useState} from "react";

export default function UseRefComp () {

 const [state, setState] = useState({
   count : 0
 })

 const countRef = useRef(0) //contRef.current


  const increaseCountState = () => {
   setState((prevState) => {
     return {
       ...prevState,
        count : prevState.count + 1
     }
   })
  }
  
  const increaseRef = () => {
    countRef.current = countRef.current + 1
    console.log(countRef)
    console.log("Ref는 다시 랜더링 하지않으므로 랜더링때만 나온다")
  }

  return(
      <div>
        <p>state: {state.count}</p>
        <p>Ref: {countRef.current}</p>
        <button onClick={increaseCountState}>버튼</button>
        <button onClick={increaseRef}>Ref버튼</button>
      </div>
  )
}