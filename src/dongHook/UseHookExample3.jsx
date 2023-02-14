import React,{useEffect,useState,useReducer,useRef} from "react";

export default function UseHookExample3() {
  const ref = useRef()

  const reducer = (state, action) => {
    if (action.type === "남자"){
      return (
          console.log("남자버튼을 누름")
      )
    } else if (action.type === "여자"){
      return (
          console.log("여자버튼을 누름")
      )
    }
  }

  const [state, dispatch] = useReducer(reducer)

  return (
      <div>
        <button onClick={(e) => dispatch({type:"남자"})}>버튼</button>
        <button onClick={(e) => dispatch({type:"여자"})}>여자</button>
      </div>
  )
}