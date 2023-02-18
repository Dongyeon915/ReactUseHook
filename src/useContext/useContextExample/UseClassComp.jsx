import React, {useContext} from "react";
import ClassContext from "./ClassContext"

export default function UseClassComp() {
  const classMember = useContext(ClassContext)

  return (
      <div>
        {
          classMember.map(member => {
            return (
                <div>
                  <p>{member.name}</p>
                </div>
            )
          })
        }
      </div>
  )
}