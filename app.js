let getweather = () => {
    let c_name = document.querySelector("#inp-weather").value
    let Api_key = 'a19ac5ed42c436634a170333b3d18673'
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${c_name}&units=metric&appid=${Api_key}`)
    .then((response)=>{
       let a = document.querySelector('#temp').innerHTML = res.data.main.temp
       let b = document.querySelector('#humidity').innerHTML = res.data.main.humidity
       let c = document.querySelector('#temp_max').innerHTML = res.data.main.temp_max
       let d = document.querySelector('#temp_min').innerHTML = res.data.main.temp_min        
    })
    .catch((error)=>{
        console.log(error)

    })       

}