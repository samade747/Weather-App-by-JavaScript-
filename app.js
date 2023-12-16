function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showWeather, handleLocationError);
    } else {
        alert('Location not supported or denied.');
    }
}

function handleLocationError(error){
    if(error.code === 1){
        manualWeatherCheck();
    } else{
        alert('error getting location')
    }
}

function showWeather(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    getWeatherByCoordinates(latitude, longitude);
}

function getWeatherByCoordinates(latitude, longitude) {
    let Api_key = 'a19ac5ed42c436634a170333b3d18673';
    console.log("API Request URL:", `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${Api_key}`);

    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${Api_key}`)
        .then((response) => {
            document.querySelector('#temp').innerHTML = 'Temperature: ' + response.data.main.temp;
        document.querySelector('#humidity').innerHTML = 'Humidity: ' + response.data.main.humidity;
        document.querySelector('#temp_max').innerHTML = 'Temp max: ' + response.data.main.temp_max;
        document.querySelector('#temp_min').innerHTML = 'Temp low: ' + response.data.main.temp_min;
        })
        .catch((error) => {
            console.log(error);
        });
}


function manualWeatherCheck() {
    const cityName = prompt("Enter city name for weather check:");
    if (cityName) {
        getWeatherByCityName(cityName);
    } else {
        alert("City name cannot be empty.");
    }
}

function getWeatherByCity() {
    const cityName = document.getElementById('inp-city').value;
    if (cityName) {
        getWeatherByCityName(cityName);
    } else {
        alert('City name cannot be empty.');
    }
}



function getWeatherByCityName(cityName) {
    let Api_key = 'a19ac5ed42c436634a170333b3d18673';
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${Api_key}`)
    .then((response)=>{
        document.querySelector('#temp').innerHTML = 'Temperature: ' + response.data.main.temp;
        document.querySelector('#humidity').innerHTML = 'Humidity: ' + response.data.main.humidity;
        document.querySelector('#temp_max').innerHTML = 'Temp max: ' + response.data.main.temp_max;
        document.querySelector('#temp_min').innerHTML = 'Temp low: ' + response.data.main.temp_min;
    })
    .catch((error)=>{
        console.log(error);
    });
}




// function getLocation(){
//     if(navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showWeather, handleLocationError);
//     } else {
//         alert('location not supporting or Denied');
//     }
// }

// function handleLocationError(error){
//     if(error.code === 1){
//         manualWeatherCheck();
//     } else{
//         alert('error getting location')
//     }
// }


// function showWeather(position){
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;

//     getWeatherByCoordinates(latitude, longitude);

// }

// function manualWeatherCheck() {
//     const cityName = prompt("Enter city name for weather check:");
//     if (cityName) {     
//         getWeatherByCityName(cityName);
//     } else {
//         alert("City name cannot be empty.");
//     }
// }

// function getWeatherByCityName(cityName) {
//     let Api_key = 'a19ac5ed42c436634a170333b3d18673';
//     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${Api_key}`)
//     .then((response)=>{
        
//         document.querySelector('#temp').innerHTML = 'Temperature: ' + response.data.main.temp;
//         document.querySelector('#humidity').innerHTML = 'Humidity: ' + response.data.main.humidity;
//         document.querySelector('#temp_max').innerHTML = 'Temp max: ' + response.data.main.temp_max;
//         document.querySelector('#temp_min').innerHTML = 'Temp low: ' + response.data.main.temp_min;
//     })
//     .catch((error)=>{
//         console.log(error);
//     });
// }




// let getweather = () => {
//     let c_name = document.querySelector("#inp-weather").value
//     let Api_key = 'a19ac5ed42c436634a170333b3d18673'
//     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${c_name}&units=metric&appid=${Api_key}`)
//     .then((response)=>{
//        document.querySelector('#temp').innerHTML     = 'Temperature:'  + response.data.main.temp
//        document.querySelector('#humidity').innerHTML = 'Humidity:'  + response.data.main.humidity
//        document.querySelector('#temp_max').innerHTML = 'Temp max:'  + response.data.main.temp_max
//        document.querySelector('#temp_min').innerHTML = 'Temp low:'  + response.data.main.temp_min        
//     })
//     .catch((error)=>{
//         console.log(error)

//     })       

// }