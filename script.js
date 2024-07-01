//http://api.weatherapi.com/v1/current.json?key=f86bcf337c544042bd480137240606&q=Nairobi&aqi=no
//including search functionality
let temp

let target = "Nairobi"

const fetchResults = async (targetLocation) => {
    let url = 'http://api.weatherapi.com/v1/current.json?key=f86bcf337c544042bd480137240606&q=${targetLocation}&aqi=no'
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
//as obtained from the weather API. you create a oath to the specific rubric
let locationName = data.location.name
let time = data.location.localtime
let temp = data.current.temp_c
let condition = data.current.condition.text


}

fetchResults(target)