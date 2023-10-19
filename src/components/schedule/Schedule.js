import getCurrentUser from "../../utils/getCurrentUser"
import DayOfWeekScheduler from "./DayOfWeekScheduler";
import CopyrightFooter from "../footer/Footer";
import './schedule.css'

const daysOfWeek = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

function Schedule(){
    const availability = Object.fromEntries(
        daysOfWeek.map(day => [day, Array(24).fill(false)])
    )

    if(!getCurrentUser()) window.location.href = '/login';
    
    return (
        <>
            {getCurrentUser() && <p id="welcome">Welcome {getCurrentUser().email}!</p>}
            <div id="schedule-create-container">
                <h1>Create your schedule</h1>
                <h3>Select the times that you are available</h3>
                {
                    daysOfWeek.map(day =>
                        <DayOfWeekScheduler key={day} day={day} dayObject={availability[day]} />
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