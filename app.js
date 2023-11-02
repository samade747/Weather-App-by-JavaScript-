let getweather = () => {
    let c_name = document.querySelector("#inp-weather").value
    let Api_key = 'a19ac5ed42c436634a170333b3d18673'
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${c_name}&units=metric&appid=${Api_key}`)
    .then((response)=>{
       document.querySelector('#temp').innerHTML     = 'Temperature is:'  + response.data.main.temp
       document.querySelector('#humidity').innerHTML = 'Humidity is:'  + response.data.main.humidity
       document.querySelector('#temp_max').innerHTML = 'Temp max is:'  + response.data.main.temp_max
       document.querySelector('#temp_min').innerHTML = 'Temp low is:'  + response.data.main.temp_min        
    })
    .catch((error)=>{
        console.log(error)

    })       

}