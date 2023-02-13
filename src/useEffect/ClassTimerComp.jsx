import React from "react";

export default class ClassTimerComp extends React.Component {

 componentDidMount() {
   const timer = setInterval(() => {
     console.log("타이머 실행중")
   }, 2000)
 }


  render() {
    return (
      <div>
        <p>타이머 시작 콘솔 확인</p>
      </div>
    )
  }
}
