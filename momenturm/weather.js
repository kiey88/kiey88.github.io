const API_KEY = '4e07c949f7d695658111621a6938925f';
const elemCity = document.querySelector('.city');
const elemTemperature = document.querySelector('.temperature');

//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//const OPEN_URL = "https://api.openweathermap.org/data/2.5/weather?";
const getWeather = (lat,lon)=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    //console.log(url);
    fetch(url)
    .then((response)=>{return response.json();})
    .then((json)=>{
        // console.log(json);
        // console.log(json.name);
        // console.log((json.main.temp - 273.15).toFixed(2));
        // console.log((json.weather));
        elemCity.textContent = json.name;
        elemTemperature.textContent = (json.main.temp - 273.15).toFixed(2)+'℃';
    })
}
const handleSuccess = (position)=>{
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(lat,lon);
    getWeather(lat,lon);
};
const handleError = ()=>{

};

const weather_init = ()=>{
    navigator.geolocation.getCurrentPosition( handleSuccess, handleError );
}
weather_init();