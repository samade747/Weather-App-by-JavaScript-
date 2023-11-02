let getweather = () => {
    let c_name = document.querySelector("#inp-weather").value
    let Api_key = 'a19ac5ed42c436634a170333b3d18673'
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${c_name}&units=metric&appid=${Api_key}`)
    .then((response)=>{
        console.log(response.data.main.temp)
    })
    .catch((error)=>{
        console.log(error)

    })       

}