import { useEffect, useState } from "react"
import Activity from "./components/Activity"
import ActivityForm from "./components/ActivityForm"
import { db } from './firebase'
import { query, collection, onSnapshot, QuerySnapshot, updateDoc, doc, addDoc, deleteDoc } from "firebase/firestore"



const style = {
  bg: `pt-10 h-screen w-screen bg-gradient-to-r from-indigo-500 to-sky-400`,
  title: `text-center font-bold text-gray-800 text-4xl p-2`,
  container: `bg-slate-100 max-w-[700px] w-full m-auto rounded-md shadow-xl p-4`
}

function App() {

  const [activities, setActivities] = useState([])

  const [descriptionInput, setDescriptionInput] = useState('')
  const [hourInput, setHourInput] = useState(0)
  const [minuteInput, setMinuteInput] = useState(0)

// Create
const createActivity = async (e) => {
  e.preventDefault(e)
  if(descriptionInput==='' || (hourInput === 0 && minuteInput === 0)){
    alert("Please fill out all fields")
    return
  }
  await addDoc(collection(db, 'activities'), {
    description: descriptionInput,
    hours: hourInput,
    minutes: minuteInput,
    seconds: 0,
    outOfTime: false
  })
  setDescriptionInput('')
  setHourInput(0)
  setMinuteInput(0)
}

// Read
useEffect(() => {
  const q = query(collection(db, 'activities'))
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    let activitiesArr = []
    querySnapshot.forEach((doc) => {
      activitiesArr.push({...doc.data(), id: doc.id})
    })
    setActivities(activitiesArr)
  })
  return () => unsubscribe()
}, [])


// Update
const saveTime = async (activity) => {
  await updateDoc(doc(db, 'activities', activity.id), {
    hours: activity.hours,
    minutes: activity.minutes,
    seconds: activity.seconds
  })
}

// Delete
const deleteActivity = async (id) => {
  await deleteDoc(doc(db, 'activities', id))
}


  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h1 className={style.title}>Activity Tracker</h1>
        <ActivityForm 
          descriptionInput={descriptionInput}
          setDescriptionInput={setDescriptionInput}
          hourInput={hourInput}
          setHourInput={setHourInput}
          minuteInput={minuteInput}
          setMinuteInput={setMinuteInput}
          activitySubmit={createActivity}
        />

        <ul>
          {
          
          activities.map((activity, index) => (
            <Activity key={index} activity={activity} deleteActivity={deleteActivity} saveTime={saveTime}/>
          ))}
        </ul>

      </div>
      
      <p></p>
    </div>
  )
}

export default App
