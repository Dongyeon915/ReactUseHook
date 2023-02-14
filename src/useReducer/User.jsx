import React from "react";

export default function User ({name}) {
  return (
      <div>
        <p>{name}</p>
        <button>삭제</button>
      </div>
  )
}