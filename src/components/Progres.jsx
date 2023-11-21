import { useState } from "react"
import { Arrwleft, Arrwriagth } from "./icons"

export function Progress({ pageVies }) {
  const [progress, setProges] = useState(154)
  const [positon, setPositon] = useState(0)
  const [wit, setWit] = useState(35)
  const [st, setTs] = useState(false)




  const onProgress = (e) => {
    setPositon(e.clientX)

    if (positon > e.clientX && progress >= 0 && progress <= 500) {
      let counte = progress
      counte = counte - 1.3
      setProges(counte)
    } else if (positon < e.clientX && progress < 490) {
      let counte = progress
      counte = counte + 1.3
      setProges(counte)
    }

    let wi = Math.trunc((progress * 100) / 490)
    setWit(wi)
    pageVies(wi)
  }

  return (
    <div className="slider"
      style={{ width: `${wit}%` }}
    >
      <div
        onDragStart={() => setTs(true)}
        onDragEnd={() => setTs(false)}
        draggable='true'
        onDragCapture={onProgress}
        style={st ? { opacity: 0 } : null}
        className={"drag-visable"}>
        <Arrwleft />
        <Arrwriagth />
      </div>
      <div
        onDragStart={() => setTs(true)}
        onDragEnd={() => setTs(false)}
        draggable="true"
        style={{ translate: `${progress}px` }}
        onDragCapture={onProgress}
        className={st ? "circle op" : "circle"}>
        <Arrwleft />
        <Arrwriagth />
      </div>
    </div>
  )
}