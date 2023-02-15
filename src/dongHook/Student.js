import React from "react";

export default function Student ({name, dipatch, id}) {
  return (
      <div>
        <span>{name}</span>
        <button onClick={() => {
          dipatch({type: 'delete-student', payload: {id}})
        }
        }>삭제</button>
      </div>
  )
}