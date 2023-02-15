import React, {useReducer, useRef, useState} from "react";
import Student from './Student'

export default function AddMember() {
  const ref = useRef()
  const reducer = (state, action) => {
    switch (action.type) {
      case 'add-student':
        const name = action.payload.name
        const newStudent = {
          id: Date.now(),
          name
        }
        return {
          count: state.count + 1,
          students: [...state.students, newStudent]
        }
      case 'delete-student' :
        return {
          count: state.count - 1,
          students: state.students.filter(
              (student) => student.id !== action.payload.id)
        }
      default:
        return state
    }
  }

  const initialState = {
    count: 0,
    students: []
  }

  const [name, setName] = useState()
  const [studentInfo, dipatch] = useReducer(reducer, initialState)

  return (
      <div>
        <h1>출석부</h1>
        <p>총 학생 수: {studentInfo.count}</p>
        <input
            ref={ref}
            type="text"
            placeholder="이름을 입력해주세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <button onClick={() => {
          dipatch({type: 'add-student', payload: {name}})
        }
        }>추가
        </button>
        {studentInfo.students.map(student => {
          return (
              <Student key={student.id} name={student.name} dipatch={dipatch}
                       id={student.id}/>)
        })}
      </div>
  )
}