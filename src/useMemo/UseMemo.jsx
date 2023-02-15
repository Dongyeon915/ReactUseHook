import React, {useMemo, useState} from "react";

function totalLimit(snacks) {
  console.log("total Limit")
  return snacks.map(snacks => snacks.limit).reduce((prev, cur) => {
        return prev + cur
      }
  )
}

export default function UseMemo() {
  const [state, setState] = useState({
    inpuValue: ''
  })

  const [snack, setSnack] = useState([
    {name: "ferrero", limit: 10},
    {name: "custard", limit: 9},
    {limit: 20}
  ])

  const snackLimit = useMemo(() => {
    return totalLimit(snack)
  }, [snack])

  const onChangeHandler = (e) => {
    setState({
      inputValue: e.target.value
    })
  }

  return (
      <div>
        <p>Total Limit: {snackLimit}</p>
        <input
            value={state.inpuValue}
            onChange={onChangeHandler}
        />
        <p>{state.inpuValue}</p>
      </div>
  )
}