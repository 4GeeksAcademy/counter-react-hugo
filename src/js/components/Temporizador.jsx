import { FaClock } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import swal from "sweetalert"
import { icon } from "@fortawesome/fontawesome-svg-core";







const Temporizador = () => {


  const [counter, setCounter] = useState(0);
  const [counterMinutos, setCounterMInutos] = useState(0);
  const [counterHoras, setCounterHoras] = useState(0);
  const [timerId, setTimerId] = useState(0)
  const [value, setValue] = useState(false)
  const [inputSeg, setInputSeg] = useState()
  const [inputMin, setInputMin] = useState()

  let totalSegundos = inputSeg + inputMin * 60;
  console.log(totalSegundos)
  console.log(typeof inputSeg)
  console.log(typeof counter)
  useEffect(() => {

    let intervalId

    if (value == true) {

      intervalId = init()
    }




    setTimerId(intervalId)

    return () => clearInterval(intervalId)
  }, [value]);


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
        } else if (prevCounter === totalSegundos) {
          swal({
            title: "TIMER",
            text: "TIEMPO ALCAZADO",
            icon: "success",
            button: "ACEPT",
            timer: 4000
          })
          setValue(false)
          return prevCounter

        }

        return prevCounter + 1
      })
    }, 1000);

    return intervalId


  }

  const newValueStart = () => {
    if (inputSeg == null || inputMin == null) {
      swal({
        title: "EMPTY TIMER",
        text: "PLEASE ENTER ANY VALUE",
        icon: "error",
        button: "ACEPT",
        timer: 4000
      });

    } else if (inputSeg === 0 && inputMin === 0) {
      swal({
        title: "ALL INPUNTS CAN´T BE EMPTY",
        text: "PLEASE ENTER ANY VALUE",
        icon: "warning",
        button: "ACEPT",
        timer: 4000
      });
    }

    else {
      setValue(true)
    }


  }
  const newValueStop = () => {
    setValue(false)
  }

  const reset = () => {
    setCounter(0)
    setCounterMInutos(0)
    setCounterHoras(0)

  }


  return (

    <div className="totalContainerT">
      <div className="titulo">
        <h1>TIMER</h1>
      </div>
      <div className="inputs">
        <div className="minutosInput">
          <input className="iminutos" type="number" placeholder=" 0" onChange={(event) => setInputMin(Math.floor(event.target.value))} />
        </div>
        <div className="segundosInput">
          <input className="isegundos" type="number" placeholder=" 0" onChange={(event) => setInputSeg(Math.floor(event.target.value))} />
        </div>
      </div>
      <div className="Temporizador">
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
        <button className="reset" onClick={newValueStart} >START</button>
        <button className="reset" onClick={newValueStop}>STOP</button>

      </div>

    </div>
  )
}

export default Temporizador