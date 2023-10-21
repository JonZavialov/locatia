import getCurrentUser from "../../utils/getCurrentUser"
import DayOfWeekScheduler from "./DayOfWeekScheduler";
import CopyrightFooter from "../footer/Footer";
import { useEffect, useState } from "react";
import createNotification from "../../utils/createNotification";
import postAvailability from "../../firebase-utils/post/postAvailability";
import './schedule.css'
import getAvailabilityInfo from "../../firebase-utils/query/getAvailabilityInfo";

const daysOfWeek = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

function Schedule(){    
    const [availability, setAvailability] = useState(Object.fromEntries(daysOfWeek.map(day => [day, Array(24).fill(false)])))
    const [currentDay, setCurrentDay] = useState(daysOfWeek[0])
    const [notAvailableDays, setNotAvailableDays] = useState([])

    function updateAvailability(day, hour, value) {
        setAvailability({...availability, [day]: [...availability[day].slice(0, hour), value, ...availability[day].slice(hour+1)]})
    }

    function clearAvailability(day) {
        setAvailability({...availability, [day]: Array(24).fill(false)})
    }

    function updateNotAvailableDays(day) {
        if (notAvailableDays.includes(day)) setNotAvailableDays(notAvailableDays.filter(d => d !== day))
        else setNotAvailableDays([...notAvailableDays, day])
    }

    useEffect(() => {
        const asd = async() => {
            const userInfo = getCurrentUser()

            if (!userInfo) window.location.href = '/login'
            else {
                const availInfo = await getAvailabilityInfo(userInfo.uid)
                if (availInfo) {
                    setAvailability(availInfo)
                }
            }
        }
        asd()
    }, [])

    return (
        <>
            {getCurrentUser() && <p id="welcome">Welcome {getCurrentUser().email}!</p>}
            <div id="schedule-create-container">
                <h1>Create your schedule</h1>
                <h3>Select the times that you are available</h3>
                <div id="day-selector">
                    <i className="fa fa-caret-left" aria-hidden="true" onClick={() => {
                        const index = daysOfWeek.indexOf(currentDay)
                        setCurrentDay(daysOfWeek[(index + 6) % 7])
                    }}></i>
                    <h2>{currentDay}</h2>
                    <i className="fa fa-caret-right" aria-hidden="true" onClick={() => {
                        const index = daysOfWeek.indexOf(currentDay)
                        setCurrentDay(daysOfWeek[(index + 1) % 7])
                    }}></i>
                </div>
                <DayOfWeekScheduler 
                    day={currentDay} 
                    updateAvailability={updateAvailability}
                    updateNotAvailableDays={updateNotAvailableDays} 
                    dayObject={availability[currentDay]} 
                    notAvailable={notAvailableDays.includes(currentDay)}
                    clearAvailability={clearAvailability}
                />
                <button onClick={() => {
                    for(let day of daysOfWeek) {
                        if (!notAvailableDays.includes(day) && availability[day].every(hour => !hour)) {
                            createNotification('error', 'Please select at least one hour for each day, or mark the day as unavailable')
                            return
                        }
                    }
                    postAvailability(availability) 
                    createNotification('success', 'Availability saved successfully')
                }}>Save</button>
            </div>
            <CopyrightFooter />
        </>
    )
}

export default Schedule