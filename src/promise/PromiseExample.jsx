import React from "react";
export default function PromiseExample() {

  const promise = new Promise((resolve,reject) => {
    setTimeout(() => {
      // 성공시 resolve에 전달할 value
      resolve("dong")
      // 실패시 new Error로
      reject(new Error('에러당'))
    }, 1000)
  })

  // error를 잡지않으면 uncaught 에러가 발생
  promise.then((value) => {
    console.log(value)
  }).catch(error => {
    console.log(error)
  }).finally(() => {
    console.log("이래나저래나 나는 실행한다")
  })

}
