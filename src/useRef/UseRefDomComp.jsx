import React, {useEffect, useRef} from "react";

export default function UseRefDomComp () {

  const refObject = useRef()

  useEffect(() => {
    refObject.current.focus();
  }, [])

  return(
      <div>
        <input type={"text"} ref={refObject}/>
        <button>로그인</button>
      </div>
  )
}