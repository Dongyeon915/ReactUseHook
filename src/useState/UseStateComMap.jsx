import React, {useState} from "react";

export default function UseStateComMap() {
  const [names, setNames] = useState(["김동연", "동연"]);
  const [input, setInput] = useState('');

  const handlInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleUpload = () => {
    setNames((before) => {
      return ([input, ...before]);
    })
  }

  return (
      <div>
        <input type={"text"} value={input} onChange={handlInputChange}/>
        <button onClick={handleUpload}>upload</button>

        {names.map((name, index) => {
          console.log(name)
          return <p key={index}>{name}</p>
        })}
      </div>
  )
}