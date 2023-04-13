function getAgeFromTimestamp(timestamp){
    // Calculate the difference between the current time and the timestamp
    let diff = Math.floor((Date.now() / 1000) - timestamp);

    // Define the time units and their values in seconds
    const timeUnits = [
    { unit: 'y', seconds: 31536000 }, // years
    { unit: 'w', seconds: 604800 },   // weeks
    { unit: 'd', seconds: 86400 },    // days
    { unit: 'h', seconds: 3600 },     // hours
    { unit: 'm', seconds: 60 },       // minutes
    { unit: 's', seconds: 1 },        // seconds
    ];

    // Loop through the time units and build the string
    let str = '';
    for (let i = 0; i < timeUnits.length; i++) {
        const unit = timeUnits[i];
        const value = Math.floor(diff / unit.seconds);
        if (value > 0) {
            str += value + unit.unit;
            diff -= value * unit.seconds;
            break;
        }
    }

    return str
}

export default getAgeFromTimestamp