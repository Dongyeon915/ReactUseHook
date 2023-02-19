import React from "react";
import TodoItem from "./TodoItem"

export default function TodoBoard(props) {

  return (
      <div>
        <h1>할일</h1>
        {props.array.map(item => <TodoItem item={item}/>)}
      </div>
  )
}