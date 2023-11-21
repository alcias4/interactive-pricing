import { useState } from "react"



export function Checkbox({ onclickDes }) {
  const [stat, setStat] = useState(false)
  const handleONlcik = () => {
    setStat(!stat)
    !stat ? onclickDes(25) : onclickDes(0)
  }


  return (
    <li
      onClick={handleONlcik}
      className="checkbox">
      <span
        style={stat ? { marginLeft: "16px" } : null}
      ></span>
    </li>
  )
}