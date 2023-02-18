import React, {useContext} from "react";
import CoffeeContext from "./CoffeeContext";

export default function CoffeeComp () {
  const coffeeInfo = useContext(CoffeeContext)
  return (
      <div>
        {
          coffeeInfo.map(coffee => {
            return (
                <div>
                  <p>{coffee.name}</p>
                  <p>{coffee.price}</p>
                </div>
            )
          })
        }
      </div>
  )
}