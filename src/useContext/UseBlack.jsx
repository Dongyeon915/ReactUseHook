import React, {useContext} from "react";
import BContext from "./BContext";

export default function UseBlack() {

  const blackPink = useContext(BContext)
  return (

      <div>
        {
          blackPink.map(member => {

            return (
                <div>
                  <img src={member.profile_url} alt={member.name}/>
                  <p>{member.name}</p>
                </div>
            )
          })
        }
      </div>
  )
}
