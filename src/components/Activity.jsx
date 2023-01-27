import { useEffect, useState } from "react"
import {BsTrash, BsPlay} from "react-icons/bs"
import {MdOutlineDelete} from "react-icons/md"


const style = {
    activity: `flex justify-items-center border rounded-md p-5 m-2`,
    description: `text-xl ml-7 w-[245px]`,
    time: `ml-5 mr-5 text-xl w-[75px] text-center`,
    start: `bg-green-500 rounded-md text-slate-100 hover:bg-green-300 mr-1 ml-2 p-1 w-20 text-center`,
    stop: `bg-red-500 rounded-md text-slate-100 hover:bg-red-300 mr-1 ml-2 p-1 w-20 text-center`,
    delete: `bg-red-500 rounded-md text-slate-100 hover:bg-red-300 p-1 mx-5 w-20 text-center`,
    buttons: `flex justify-content-center`
}


const Activity = ({activity, deleteActivity}) => {

 

  // useEffect(() => {
  //   const timer = seconds > 0 && setInterval(() => setSeconds(seconds -1), 1000)
  //   return ()=> clearInterval(timer)
  // }, [seconds])



  // const startTimer = () => {
  //   setInterval(() => {
  //       setSeconds(seconds => seconds - 1)
  //   }, 1000)
  // }

  // const stopTimer = () => {
  //   clearInterval(startTimer)
  // }

  const [started, setStarted] = useState(false)
  const [seconds, setSeconds] = useState(((activity.hours*3600)+(activity.minutes*60)))

  // let timer
  // const handleStart = () => {
  //   timer = setInterval(() => (setSeconds(prevSecond => prevSecond -1)), 1000)  
  //   setStarted(true)
  // }

  // const handleStop = () => {
  //   clearInterval(timer)
  //   setStarted(false)
    
  // }
 
  const handleStart = () => {
    setStarted(true)
  }

  const handleStop = () => {
    setStarted(false)
  }

  useEffect(() => {
    let interval = null
    if(started) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds -1)
      }, 1000)
    } else if (!started){
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [started, seconds])



  

  
  return (
    
    <div className={style.activity}>

      <div>
        <h1 className={style.description}>{activity.description}</h1>
      </div>
        
        <div className={style.buttons}>
          <h1 className={style.time}>{`${activity.hours}:${activity.minutes}`}</h1>

            { !started ? <button onClick={handleStart} className={style.start}>Start</button>
             : <button onClick={handleStop} className={style.stop}>Stop</button>}
                
            <button onClick={() => deleteActivity(activity.id)} className={style.delete}>Delete</button>
        </div>

       
        
        
    </div>
  )
}

export default Activity