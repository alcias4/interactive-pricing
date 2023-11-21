import { Progress } from "./components/Progres"
import { Checkbox } from "./components/Checkbox"
import { useState } from "react"

function App() {
  const [view, setView] = useState({ vi: 100, pr: 16 })
  const [oring, setOringe] = useState(16)

  const pageVies = (e) => {
    let m = (100 * e) / 16
    setOringe(e)
    setView({ vi: m, pr: e })
  }

  const onclickDes = (n) => {

    if (n === 25) {
      setView({ vi: view.vi, pr: Math.floor(view.pr - (view.pr * 0.25)) })
    } else if (n === 0) {
      setView({ vi: view.vi, pr: oring })
    }
  }

  return (
    <>
      <main>
        <img className="img-bg" src="./public/bg-pattern.svg" alt="background" />
        <div className="header">
          <img src="./public/pattern-circles.svg" alt="" />
          <h1>Simple, traffic-based pricing</h1>
          <p>Sing-up for our 30-day trial.No credit card requerid</p>
        </div>
        <section className="card">
          <div className="title">
            <h2 className="total">
              {view.vi}K PAGEVIEWS
            </h2>
            <span className="precing">
              <strong
                style={view.pr < 100 ? { left: "-70px" } : null}
              >${view.pr}</strong><p>/month</p>
            </span>
          </div>
          <Progress pageVies={pageVies} />
          <menu>
            <li>Monthly Billing</li>
            <Checkbox onclickDes={onclickDes} />
            <li>Yearly Billing</li>
            <li className="discount">25% discount</li>
          </menu>
          <section className="footer">
            <ul>
              <li>
                <img src="./public/icon-check.svg" alt="icon" />
                Unlimited website
              </li>
              <li>
                <img src="./public/icon-check.svg" alt="icon" />
                100% data ownership
              </li>
              <li>
                <img src="./public/icon-check.svg" alt="icon" />
                Email reports
              </li>
            </ul>
            <button>Start my trial</button>
          </section>
        </section>
      </main>
    </>
  )
}

export default App
