import React, {useReducer} from "react";

export default function UseHookExample2() {
  // reducer - state를 업데이트 역활
  // action - type의 따라 state값을 변경시킨다
  // dispatch - action의 타입 전달
  const reducer = (state, action) => {
    console.log("증가 확인")
    if (action.type === "증가") {
      return {
        count: state.count + 1
      }
    } else if (action.type === "감소") {
      console.log("감소 확인")
      return {
        count: state.count - 1
      }
    }
    return state
  }

  const initialState = {
    count: 0
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
      <div>
        <h3>{state.count}</h3>
        <button onClick={(e) => dispatch({type: "증가"})}>증가버튼</button>
        <button onClick={(e) => dispatch({type: "감소"})}>감소버튼</button>
      </div>
  )
}