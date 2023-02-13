import React, {useEffect} from "react";

export default function FuntionTimerComp() {

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 작동중")
    }, 2000)

    return () => {
      clearInterval({timer})
      console.log("타이머 종료")
    }
  }, [])

  return (
      <div>
        <p>타이머 작동 콘솔</p>
      </div>
  )
}