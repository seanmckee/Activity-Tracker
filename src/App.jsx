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

  // const activities = [
  //   {
  //     description: "study for interviews",
  //     hours: 4,
  //     minutes: 30
  //   },
  //   {
  //     description: "watch anime",
  //     hours: 2,
  //     minutes:30
  //   }
  // ]


// Create

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


// Delete


  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h1 className={style.title}>Activity Tracker</h1>
        <ActivityForm />

        <ul>
          {
          
          activities.map((activity, index) => (
            <Activity key={index} activity={activity} />
          ))}
        </ul>

      </div>
      
      <p></p>
    </div>
  )
}

export default App
