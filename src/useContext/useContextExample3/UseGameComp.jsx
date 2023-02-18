import React, {useContext} from "react";
import UseGameContext from "./UseGameContext";

export default function UseGameComp () {
  const gameName = useContext(UseGameContext)
  return (
      <div>
        {
          gameName.map(gameName => {
            return (
                <div>
                  <p>{gameName.title}</p>
                  <p>{gameName.price}</p>
                </div>
            )
          })
        }
      </div>
  )
}