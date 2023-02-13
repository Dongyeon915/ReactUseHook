import React, {useEffect, useState} from "react";

export default function UseStateCom() {
  // useState에는 Object를 전달하여 사용이 가능
  const [time, setTime] = useState({
    time: 2,
    minit: 30
  })

  const timeHandle = () => {
    setTime((before) => {
      return {
        ...before,
        time: time.time + 1
      }
    })
  }

  useEffect(() => {
    return (
        console.log("time Handle메소드 실행후 콘솔 출력 확인")
    )
  }, [timeHandle])

  return (
      <div>
        <h1>현재 시각 : {time.time}시 {time.minit}분</h1>
        <button onClick={timeHandle}>시간 증가 버튼</button>
      </div>
  )
}