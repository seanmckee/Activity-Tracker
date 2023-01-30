import { useState } from "react"

const style = {
    form: `flex justify-center`,
    activity: `text-xl m-2 p-2 border rounded-md`,
    time: `text-xl border max-h-[50px] max-w-[90px] text-center m-2 rounded-md`,
    create: `bg-indigo-500 px-5 text-slate-100 rounded-lg p-2 max-h-[50px] m-2 hover:bg-indigo-400`
}


const ActivityForm = ({descriptionInput, setDescriptionInput, hourInput, setHourInput, minuteInput, setMinuteInput, activitySubmit}) => {

  document.querySelectorAll('input[type="number"]').forEach(input => {
    input.oninput = () => {
      if(input.value.length > input.maxLength) input.value = input.value.slice(0, input.maxLength)
    }
  })

  return (
    <form  onSubmit={activitySubmit} className={style.form}>
        <input value={descriptionInput} onChange={(e) => setDescriptionInput(e.target.value)} className={style.activity} type="text" placeholder="enter new activity" />
        <input maxLength="2" min="0" max="23"  onChange={(e) => setHourInput(e.target.value)} className={style.time} type="number" placeholder="hours" />
        <input maxLength="2" min="0" max="59"  onChange={(e) => setMinuteInput(e.target.value)} className={style.time} type="number" placeholder="minutes" />
        <button className={style.create} type="submit">Create</button>
    </form>
  )
}

export default ActivityForm