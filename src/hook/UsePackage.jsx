import React, {useEffect, useMemo, useReducer, useRef, useState} from "react";

export default function UsePackage() {

  const [state, setState] = useState({
    name: null
  })
  const inputRef = useRef()
  const resucerRef = useRef()
  const reducer = (state, action) => {
    if (action.type === "add-name") {
      return {
        name: resucerRef.current.value
      }
    }
    return state
  }

  const initialState = {
    name: null
  }

  const [redState, dispatch] = useReducer(reducer, initialState);

  const btnEvent = () => {
    setState((prevState) => {
      return {
        ...prevState,
        name: inputRef.current.value
      }
    })
  }

  useEffect(() => {
    alert("리듀서 값 변경")
  }, [redState])

  useMemo(() => {
    console.log("버튼누름")
  }, [UsePackage])

  const reducerBtnEvent = () => {
    dispatch({type: "add-name"})
  }

  return (
      <div>
        <p>{state.name}</p>
        <p>{redState.name}</p>
        <input ref={inputRef} type="text" placeholder={"이름을 입력"}/>
        <input ref={resucerRef} type="text" placeholder={"리듀서이름을 입력"}/>
        <button onClick={btnEvent}>버튼</button>
        <button onClick={reducerBtnEvent}>리듀서버튼</button>
      </div>
  )
}