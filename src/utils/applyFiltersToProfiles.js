import getAge from "./getAge";
import getSearchedNameResults from "./getSearchedNameResults";

function applyFiltersToProfiles(profiles, filters) {
    const params = Object.fromEntries(new URLSearchParams(filters));
    if (params.ageRange) params.ageRange = params.ageRange.split(',');
    
    // first, filter by name
    if (params.name && params.name !== ''){
        profiles = getSearchedNameResults(params.name, profiles);
    }

    // second, filter by age
    if (params.ageRange && params.ageRange.length === 2){
        for (const key in profiles){
            let age = getAge(profiles[key].birthday)
            if (age < params.ageRange[0] || age > params.ageRange[1]){
                delete profiles[key]
            }
        }
    }

    // third, filter by gender
    if(params.gender && params.gender !== 'null'){
        for (const key in profiles){
            if(profiles[key].gender !== params.gender){
                delete profiles[key]
            }
        }
    }

    // last, add proximity data to profiles
    if (params.zip && params.zip !== 0){
        for (const key in profiles){
            profiles[key].proximity = -Math.abs(profiles[key].zip - params.zip) // Negative so that it sorts in ascending order
        }
    }

    return profiles
}

export default applyFiltersToProfiles;