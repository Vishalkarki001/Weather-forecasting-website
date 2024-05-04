const inputbox=document.querySelector(".inputbox");
const btn=document.querySelector("#btn");
const weaherbody=document.querySelector(".weatherbody");
const weatherbox=document.querySelector(".weatherbox");
const details=document.querySelector(".details")
const weatherimg=document.querySelector(".weatherimg");
const temp=document.querySelector(".temp");
const description=document.querySelector(".description");
const humidity=document.querySelector(".text");
const wind=document.querySelector(".speed");
const notfound=document.querySelector(".notfound");


async  function checkweather(city){
const api_key="29fb1ec5f918f69a3afac05b886fa768";
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
const weatherdata=await fetch(`${url}`).then (response =>
    response.json());
    console.log(weatherdata)

   if(weatherdata.cod===`404`){
    notfound.style.display="flex";
    weaherbody.style.display="none";
    
    return;
   }else{
    notfound.style.display="none";
    weaherbody.style.display="flex";
   }
   
   temp.innerHTML=`${Math.round(weatherdata.main.temp - 273.15)}°C `;
   wind.innerHTML=`${weatherdata.wind.speed}km/Hr`
   humidity.innerHTML=`${weatherdata.main.humidity}%`;
   
   description.innerHTML=`${weatherdata.weather[0].description}`; 
   
   switch(weatherdata.weather[0].description){

    case `haze`:
        weatherimg.src="haze.jpg";
        break;
        
        case `scattered clouds`:
        weatherimg.src="brokenclouds.jpg";
        break;

    case `overcast clouds`:
            weatherimg.src="partly cloud.jpg";
            break;

    case `Clouds`:
       weatherimg.src="cloudy.jpg";
     break;

    case `light rain`:
    weatherimg.src="rainy.jpg";
    break;
     
    case `clear sky`:
        weatherimg.src="clear.jpg";
        break;

     case`broken clouds`:
        weatherimg.src="brokenclouds.jpg";
        break;

        case `thunder`:
            weatherimg.src="thunder.jpg";
            break;

            case `mist`:
                weatherimg.src="mist.jpg";
                break;

      

    
   }            
}

btn.addEventListener('click',()=>{
    
    checkweather(inputbox.value)
})

