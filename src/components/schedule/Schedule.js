import getCurrentUser from "../../utils/getCurrentUser"
import DayOfWeekScheduler from "./DayOfWeekScheduler";
import CopyrightFooter from "../footer/Footer";
import getProfileFromUUID from "../../firebase-utils/query/getProfileFromUUID";
import { useEffect, useState } from "react";
import './schedule.css'

const daysOfWeek = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

function Schedule(){    
    const [availability, setAvailability] = useState(Object.fromEntries(daysOfWeek.map(day => [day, Array(24).fill(false)])))
    const [currentDay, setCurrentDay] = useState(daysOfWeek[0])

    function updateAvailability(day, hour, value) {
        setAvailability({...availability, [day]: {...availability[day], [hour]: value}})
    }

    useEffect(() => {
        const asd = async() => {
            const userInfo = getCurrentUser()

            if (!userInfo) window.location.href = '/login'
            else {
                const profileInfo = await getProfileFromUUID(userInfo.uid)
                if (profileInfo.profile.availability) {
                    setAvailability(profileInfo.profile.availability)
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
                    <i class="fa fa-caret-left" aria-hidden="true" onClick={() => {
                        const index = daysOfWeek.indexOf(currentDay)
                        setCurrentDay(daysOfWeek[(index + 6) % 7])
                    }}></i>
                    <h2>{currentDay}</h2>
                    <i class="fa fa-caret-right" aria-hidden="true" onClick={() => {
                        const index = daysOfWeek.indexOf(currentDay)
                        setCurrentDay(daysOfWeek[(index + 1) % 7])
                    }}></i>
                </div>
                <DayOfWeekScheduler day={currentDay} updateAvailability={updateAvailability} dayObject={availability[currentDay]} />
                <button onClick={() => {
                    console.log(availability)
                }}>Save</button>
            </div>
            <CopyrightFooter />
        </>
    )
}

export default Schedule