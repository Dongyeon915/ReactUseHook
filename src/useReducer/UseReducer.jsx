import React, {useReducer} from "react";

export default function UseReducer() {

  // action: state를 조작하려는 객체를 의미
  const reducer = (state, action) => {
    if (action.type === "plus") {
      console.log("Action Plus")
      return {
        count: state.count + 1
      }
    }
    return state
  }

  const [state, dispatch] = useReducer(reducer, {
    count: 0
  })

  const click = () => {
    dispatch({type: "plus"})
  }

  return (
      <div>
        <p>{state.count}</p>
        <button onClick={click}>버튼</button>
      </div>
  )
}