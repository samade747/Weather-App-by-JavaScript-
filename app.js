let getweather = () => {
    let Api_key = 'a19ac5ed42c436634a170333b3d18673'
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=${Api_key}`)
    .then((Response)=>{
        console.log(Response)
    })
    .catch((error)=>{
        console.log(error)

    })    





}