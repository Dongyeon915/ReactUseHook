import React, {useEffect, useReducer, useRef, useState} from "react";
import User from "./User";

export default function UseReducerExamlple() {
  // reducer은 함수로 if문으로 다양하게 사용 가능
  const reducer = (state, action) => {
    if (action.type === 'add-user'){
      const name = action.payload.name;
      const newUser = {
        id: Date.now(),
        name:name,
      }
      return {
        count: state.count + 1,
        users: [...state.users, newUser]
      }
      return state
    }
  }

  // 따로 빼서 관리
  const initialState = {
    cont: 0,
    users: []
  }

  const refInput = useRef();
  const [name, setName] = useState('');
  // reducer은 state를 변경하는 logic이 담겨있는 Function이며 새로운 state를 반환해주면됩니다.
  const [userState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    refInput.current.focus()
    console.log("입력창 알림 포커스")
  })

  return (
      <div>
        <h1>관리</h1>
        <p>총 회원 수: {userState.cont}</p>
        <input
            type="text"
            placeholder={"이름을 입력해주세요"}
            value={name}

            onChange={(e) => setName(e.target.value)}
            ref={refInput}
        />
        <button onClick={() => {
          dispatch({type: 'add-user', payload: {name}})
        }}>추가</button>

        {userState.users.map((e) => {
          return <User key={userState.users} name={e.name}/>
        })}
      </div>
  )
}