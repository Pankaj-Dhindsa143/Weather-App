const inputbox = document.querySelector(".input-box");
const searchbtn = document.getElementById("searchbtn");
const weather_img = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");
const not_found_location = document.querySelector(".not-found-location");
const weather_box = document.querySelector(".weather-box")

async function checkWeather(city){
    const api_key ="f2fa3d324451286eeb141f9fa24a5532"
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(Response =>
        Response.json());
        if(weather_data.cod === "404"){
            not_found_location.style.display = "flex";
            weather_box.style.display ="none"
            return;
        }
        else{
            not_found_location.style.display = "none";
            weather_box.style.display ="flex"
        }
        

        temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)} °C`;

        description.innerHTML =`${weather_data.weather[0].description}`;

        humidity.innerHTML = `${weather_data.main.humidity}%`;

        wind_speed.innerHTML =`${weather_data.wind.speed}km/H`;

        switch(weather_data.weather[0].description){

            case "overcast clouds": weather_img.src = "img/cloud.png";
            break;
            case "clear": weather_img.src = "img/clear.png";
            break;
            case "rain": weather_img.src = "img/rain.png";
            break;
            case "haze": weather_img.src = "img/mist.png";
            break;
            case "snow": weather_img.src = "img/snow.png";
            break;
            console.log(weather_img);
        }
}


searchbtn.addEventListener('click', ()=>{
    checkWeather(inputbox.value);
})