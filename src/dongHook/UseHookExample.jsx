import React, {useEffect, useRef, useState,useReducer} from "react";

export default function UseHookExample() {

  const ref = useRef()
  const [state, setState] = useState({
    inputValue : null
  });

  // 버튼 클릭시 input에 적혀진 내용을 저장 후 출력
  const btnEvent = () => {
    console.log(state.inputValue)
  }

  // inputValue를 입력중에는
  useEffect(() => {
    console.log("내용이 바뀌는 중이다")
  }, [state.inputValue])

  return (
      <div>
        <p>Hook</p>
        {/*onChange는 해당 input e를 받아 setState로 바로 저장*/}
        <input ref={ref} type="text" placeholder={"저장될 내용을 입력 해주세요"}
               onChange={(e) => setState({
                 inputValue: e.target.value
               })}/>
        <button onClick={btnEvent}>버튼</button>
      </div>
  )
}