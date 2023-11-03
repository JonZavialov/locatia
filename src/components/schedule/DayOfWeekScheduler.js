function DayOfWeekScheduler({ day, updateAvailability, dayObject, updateNotAvailableDays, notAvailable, clearAvailability }){  
  return (
    <div id="day-of-week-container">
      <div className={`hours-container ${notAvailable ? 'not-available' : ''}`}>
        {Array.from({ length: 24 }, (_, i) => i + 1).map((hour) => (
          <p
            className="hour"
            key={hour}
            onMouseDown={() => {
              if (!notAvailable) updateAvailability(day, hour-1, !dayObject[hour-1]);
            }}
            onMouseEnter={(e) => {
              if (e.buttons === 1 && !dayObject[hour-1] && !notAvailable) updateAvailability(day, hour-1, !dayObject[hour-1]);            
            }}
            style={{backgroundColor: dayObject[hour-1] ? "#B09FC4" : ""}}
          >
            {hour > 12 ? hour - 12 : hour}
            &nbsp;
            {hour > 12 ? "pm" : "am"}
          </p>
        ))}
      </div>
      <div id="bottom-row">
        <button id="reset-button" onClick={() => clearAvailability(day)}>Reset</button>
        <div id="not-avail-day-check" className={notAvailable ? 'not-avail-text' : ''}>
          <input type="checkbox" id="not-avail" checked={notAvailable ?? false} onChange={() => {
            updateNotAvailableDays(day)
            clearAvailability(day)
          }}/>
          <label htmlFor='not-avail'>I am not available on this day</label>
        </div>
      </div>
    </div>
  );
};

export default DayOfWeekScheduler;