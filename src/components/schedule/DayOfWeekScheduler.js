function DayOfWeekScheduler({ day, updateAvailability, dayObject, updateNotAvailableDays, notAvailable }){  
  return (
    <>
      <div className={`hours-container ${notAvailable ? 'not-available' : ''}`}>
        {Array.from({ length: 24 }, (_, i) => i + 1).map((hour) => (
          <p
            className="hour"
            key={hour}
            onClick={() => {
              if (!notAvailable) updateAvailability(day, hour-1, !dayObject[hour-1]);
            }}
            style={{backgroundColor: dayObject[hour-1] ? "#B09FC4" : ""}}
          >
            {hour > 12 ? hour - 12 : hour}
            &nbsp;
            {hour > 12 ? "pm" : "am"}
          </p>
        ))}
      </div>
      <div id="not-avail-day-check">
        <input type="checkbox" id="not-avail" checked={notAvailable ?? false} onChange={() => updateNotAvailableDays(day)}/>
        <label htmlFor='not-avail'>I am not available on this day</label>
      </div>
    </>
  );
};

export default DayOfWeekScheduler;