
async function apiData(city) {
    let url;    // Initializing variable name

    // condition to check whether user's preffered city or default city name
    if (city) {
      url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=43f2843c3bb7d7c06f24296351fe73aa`;
    } else {
      url = `https://api.openweathermap.org/data/2.5/weather?q=Shanghai&appid=43f2843c3bb7d7c06f24296351fe73aa`;
    }

   

    


    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    
    // To get the name of current city
    const cityvar = document.getElementById("city");
    cityvar.innerHTML = data.name;

    // For date and time
    const timevar = document.getElementById("timezone");
    const localTime = new Date();
    const aTime = localTime.getTime() + localTime.getTimezoneOffset() * 60000;
    const locationTime = new Date(aTime + 1000 * data.timezone);
    timevar.innerHTML = locationTime.toLocaleString(locationTime);

    // To get condition of Weather of current city
    const desvar = document.getElementById("description");
    desvar.innerHTML = data.weather[0].description;

    // To display weather condition through image icon
    const icon = document.querySelector(".icon");
    icon.innerHTML = `<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Icon"/>`;


    // For temperature of current city
    const tempvar = document.getElementById("temp");
    tempvar.innerHTML = (data.main.temp - 273.15).toFixed(2) + "°C";

    // for humidity
    const humivar = document.getElementById("humidity");
    humivar.innerHTML = data.main.humidity + "%";
    
    // Wind speed of current city
    const wi = document.getElementById("wind");
    wi.innerHTML = data.wind.speed + " m/s";

    // To get the pressure of the current city
    const presure = document.getElementById("pressure");
    presure.innerHTML = data.main.pressure;


    
    
  }
  
  apiData();    // Calling function
  

//   asynchronous function for searhing preffered city's weather
  async function search() {
    const cityName = document.getElementById("cityName");
    const city = cityName.value;
    await apiData(city);
  }


  const button = document.getElementById("search");
  button.addEventListener("click", search);
  