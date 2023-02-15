import React, {useRef,useState,useEffect,useReducer} from "react";
import Name from './Name'

export default function Dong() {

  const inputRef = useRef()

  const inittialState = {
    name: ''
  }

  const reducerInittialState = {
    names: [
      {
        name : ''
      },
  }

  const reducer = (state, action) => {
    if (action.type === 'add-name'){
      const newName = action.payload.name;
    }
    return names: [...names.name, newName]
  }

  const [names, dipatch] = useReducer(reducer, reducerInittialState)
  const [name, setName] = useState(inittialState)

  const clickEvent = () => {
    setName((before) => {
      return {
        name : inputRef.current.value
      }
    })
  }

  useEffect(() =>{
    alert(name.name)
  },[name.name])

  return (
      <div>
        <input
            type="text"
            placeholder={'이름'}
            ref={inputRef}
        />
        <button onClick={clickEvent}>버튼</button>
        <button onClick={() => {
          dipatch({type: "add-name" payload: {name}})
        }
        }>버튼</button>
        <p>{inittialState.name}</p>

        {name.name.map((e) => {
          return <Name key={name.name} name={e.name}/>
        })}
      </div>
  )
}