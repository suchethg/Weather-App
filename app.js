window.addEventListener('load',()=>{
let long;
let lat;
let temperatureDescription = document.querySelector('.temperature-description');
let temperatureDegree = document.querySelector('.temperature-degree');
let locationTimezone = document.querySelector('.location-timezone');
let temperatureSection = document.querySelector(".temperature");
const temperatureSpan   = document.querySelector(".temperature span");
if(navigator.geolocation)
{
navigator.geolocation.getCurrentPosition(position=>{
    long = position.coords.longitude;
    lat = position.coords.latitude;

    const proxy = "https://cors-anywhere.herokuapp.com/";
    const api =     `${proxy}https://api.darksky.net/forecast/6d5611cc50af9960c8d676e32b74522a/${lat},${long}`;
    fetch(api)
    .then(data =>{
        return data.json();
    })
    .then(respone =>{
     
        const {temperature,summary,icon} = respone.currently;
        //set DOM elements from the API
        temperatureDegree.textContent = temperature;
        temperatureDescription.textContent = summary;
        locationTimezone.textContent = respone.timezone;
        //formula for celsius
        let celsius=(temperature-32)*(5/9);
    //set Icon
    setIcons(icon,document.querySelector('.icon'))
    //change temperature    to celsius/farenheit
    temperatureSection.addEventListener("click",()=>{
        if(temperatureSpan.textContent==="F"){
            temperatureSpan.textContent = "C";
            temperatureDegree.textContent=Math.floor(celsius);  
        }
        else{
            temperatureSpan.textContent = "F";
            temperatureDegree.textContent=temperature;
        }
    });
    });

});
  
}
function setIcons   (icon,iconID){
    const skycons =new Skycons({color:"white"});
    const currentIcon =icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconID,Skycons[currentIcon]);
}
});