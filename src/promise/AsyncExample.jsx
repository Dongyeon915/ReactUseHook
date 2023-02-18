function test1(ms) {
  return new Promise((resolve,reject) => setTimeout(resolve, ms))
}

async function test2() {
  await test1(2000)
  return console.log("테스트2종료")
}

async function test3() {
  await test2(3000)
  return console.log("테스트3종료")
}

async function getTest() {
  await test2();
  await test3();
  return "실행종료"
}

// async function getTest() {
//   return test2().then(test2 => {
//     console.log(test2)
//     return test3().then(test3 => {
//       console.log(test3)
//     })
//   })
// }

getTest().then(console.log).catch(erorr => {
  console.log("에러")
})