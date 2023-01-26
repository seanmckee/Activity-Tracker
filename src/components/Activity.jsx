import {BsTrash, BsPlay} from "react-icons/bs"
import {MdOutlineDelete} from "react-icons/md"

const style = {
    activity: `flex justify-items-center border rounded-md p-5 m-2`,
    description: `text-xl ml-7 w-[245px]`,
    time: `ml-5 mr-5 text-xl w-[75px] text-center`,
    start: `bg-green-500 rounded-md text-slate-100 hover:bg-green-300 mr-1 ml-2 p-1 w-20 text-center`,
    delete: `bg-red-500 rounded-md text-slate-100 hover:bg-red-300 p-1 mx-5 w-20 text-center`,
    buttons: `flex justify-content-center`
}


const Activity = ({activity}) => {
  return (
    <div className={style.activity}>

      <div>
        <h1 className={style.description}>{activity.description}</h1>
      </div>
        
        

        <div className={style.buttons}>
          <h1 className={style.time}>{`${activity.hours}:${activity.minutes}`}</h1>
            <button className={style.start}>Start</button>    
            <button className={style.delete}>Delete</button>
        </div>

       
        
        
    </div>
  )
}

export default Activity