import { FaClock } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";






const Container = () => {
  // const timerIdRef = useRef(null);

  const [counter, setCounter] = useState(0);
  const [counterMinutos, setCounterMInutos] = useState(0);
  const [counterHoras, setCounterHoras] = useState(0);
  const [timerId, setTimerId] = useState(0)
  const [value, setValue] = useState(false)


  useEffect(() => {

    let intervalId

    if (value == true) {

      intervalId = init()
    }

    setTimerId(intervalId)

    return () => clearInterval(intervalId)
  }, [value]);

  const timerStart = () => {
    setValue(true)
  }
  const timerStop = () => {
    setValue(false)
  }
  const init = () => {

    const intervalId = setInterval(() => {
      setCounter(prevCounter => {
        if (prevCounter === 59) {
          setCounterMInutos(prevCounterMinutos => {
            if (prevCounterMinutos === 59) {
              setCounterHoras(prevCounterHoras => prevCounterHoras + 1)
              return 0
            } return prevCounterMinutos + 1
          })
          return 0
        } return prevCounter + 1
      })
    }, 1000);

    return intervalId
  }



  const reset = () => {
    setCounter(0)
    setCounterMInutos(0)
    setCounterHoras(0)

  }

  return (
    <div className="totalContainer">
      <div className="titulo">
        <h1>CHRONOMETER</h1>
      </div>
      <div className="Container">
        <div className="crono">Crono
          <div className="clock">
            <FaClock />
          </div>
        </div>
        <div className="horas">Horas
          <div className="num">{counterHoras}</div>
        </div>
        <div className="minutos">Minutos
          <div className="num">{counterMinutos}</div>
        </div>
        <div className="segundos">Segundos
          <div className="num">{counter}</div>
        </div>
        <button className="reset" onClick={reset} >RESET</button>
        <button className="reset" onClick={timerStart} >START</button>
        <button className="reset" onClick={timerStop}>STOP</button>
      </div>
    </div>
  )
}

export default Container