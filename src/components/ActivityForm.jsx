import { useState } from "react"

const style = {
    form: `flex justify-center`,
    activity: `text-xl m-2 p-2 border rounded-md`,
    time: `text-xl border max-h-[50px] max-w-[90px] text-center m-2 rounded-md`,
    create: `bg-indigo-500 px-5 text-slate-100 rounded-lg p-2 max-h-[50px] m-2 hover:bg-indigo-400`
}


const ActivityForm = () => {
  return (
    <form className={style.form}>
        <input className={style.activity} type="text" placeholder="enter new activity" />
        <input className={style.time} type="number" placeholder="hours" maxLength="2" />
        <input className={style.time} type="number" placeholder="minutes" maxLength="2" />
        <button className={style.create} type="submit">Create</button>
    </form>
  )
}

export default ActivityForm