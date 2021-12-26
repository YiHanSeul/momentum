
const API_KEY="e9a9dd79d7c4a876a9eda8e7ce75b685";
function onGeoOk(position){
    const lat=position.coords.latitude;
    const lon=position.coords.longitude;
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data=>{
        const weather=document.querySelector("#weather span:first-child")
        const city=document.querySelector("#weather span:last-child")
        city.innerText = data.name;
         weather.innerText= `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError(){
    alert("Can't find you. No Weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);