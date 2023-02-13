import React, {useEffect, useState} from "react";

export default function UserEffectComp() {
  const [state, setState] = useState({
    count: 0
  })
  const [name, setName] = useState("")

  const countUp = () => {
    setState((prevState) => {
      return {
        ...prevState,
        count: prevState.count + 1
      }
    })
  }

  // 랜더링시 항시 실행된다.
  // useEffect(() => {
  //   console.log("랜더링시 항상 실행")
  // })

  // 처음 랜더링 1번 이후 count 값이 변경될때 1번 실행된다.
  // useEffect(()=>{
  //   console.log("카운트가 올라갈때만 실행")
  // },[state.count])

  // 처음 랜더링시 1번만 실행
  // useEffect(() => {
  //   console.log("처음 랜더링 시 1번")
  // },[])


  const handleInputChang = (e) => {
    setName(e.target.value)
  }
  // onChang는 해당 El내용이 변경될때마다 안에 함수를 실행
  return (
      <div>
        <button onClick={countUp}>update</button>
        <p>count: {state.count}</p>
        <input type={"text"} value={name} onChange={handleInputChang}/>
        <p>name: {name}</p>
      </div>
  )
}