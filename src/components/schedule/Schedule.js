import getCurrentUser from "../../utils/getCurrentUser"
import DayOfWeekScheduler from "./DayOfWeekScheduler";
import CopyrightFooter from "../footer/Footer";
import getProfileFromUUID from "../../firebase-utils/query/getProfileFromUUID";
import { useEffect, useState } from "react";
import './schedule.css'

const daysOfWeek = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

function Schedule(){    
    const [availability, setAvailability] = useState(Object.fromEntries(daysOfWeek.map(day => [day, Array(24).fill(false)])))
    
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
                {   
                    daysOfWeek.every(day => availability.hasOwnProperty(day)) &&
                    daysOfWeek.map(day =>
                        <DayOfWeekScheduler key={day} day={day} dayObject={availability[day]} updateAvailability={updateAvailability} />
                    )
                }
                <button onClick={() => {
                    console.log(availability)
                }}>Save</button>
            </div>
            <CopyrightFooter />
        </>
    )
}

export default Schedule