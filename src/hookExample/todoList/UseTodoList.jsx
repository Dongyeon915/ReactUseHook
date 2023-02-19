import React, {useState} from "react";
import TodoBoard from "./TodoBoard"

export default function UseTodoList() {
  const [inputValue, setInputValue] = useState('')
  const [todoList, setTodoList] = useState([])

  const addItem = () => {
    //   기존 배열의 값을 유지하고 새로운 inputValue를 추가
    setTodoList([...todoList, inputValue])
  }

  return (
      <div>
        <input onChange={(event) => setInputValue(event.target.value)}
               type="text"
               placeholder={"할일 입력"}/>
        <button onClick={addItem}>입력</button>
        <TodoBoard array={todoList}/>
      </div>
  )
}