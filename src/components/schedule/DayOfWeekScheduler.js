function DayOfWeekScheduler({ day, updateAvailability, dayObject }){  
    return (
    <div className="day-schedule-container">
        <div className="day-label">
            {day}
        </div>
        <div className="hours-container">
        {Array.from({ length: 24 }, (_, i) => i + 1).map((hour) => (
          <p
            className="hour"
            key={hour}
            onClick={() => {
              updateAvailability(day, hour-1, !dayObject[hour-1]);
            }}
            style={{backgroundColor: dayObject[hour-1] ? "#9EBC96" : ""}}
          >
            {hour > 12 ? hour - 12 : hour}
            &nbsp;
            {hour > 12 ? "pm" : "am"}
          </p>
        ))}
      </div>
    </div>
  );
};

export default DayOfWeekScheduler;