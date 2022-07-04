const api = {
    key: "65ba4bb6de372579f68f7d42b68d52c8",
    base: "https://api.openweathermap.org/data/2.5/weather?q=london&appid=65ba4bb6de372579f68f7d42b68d52c8"
}
const search = document.querySelector(".search");
search.addEventListener('keypress',setQuery);
function setQuery(evt) {
    if (evt.keyCode == 13) {
       getResult(search.value);
    }
}
function getResult(e) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&units=metric&APPID=65ba4bb6de372579f68f7d42b68d52c8`)  
    .then (weather => {
        return weather.json();
    }).then(displayresult);
}
function capitalize (word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
function displayresult (weather) {
    console.log(weather);
    document.querySelector(".area").innerHTML= `${(weather.name)},${weather.sys.country}`;
    document.querySelector(".degree").innerHTML = `${Math.round(weather.main.temp)}°C`;
    document.querySelector(".range").innerHTML = `${(Math.round(weather.main.temp_min))-1}°C / ${Math.round(weather.main.temp_max)}°C`;
    document.querySelector(".type").innerHTML= capitalize(weather.weather[0].description);
    change(capitalize(weather.weather[0].description));
    document.querySelector(".date").innerHTML = datee(new Date())
}
function datee(de) {
    let month = ["January", "February" ,"March", "April" , "May", "June" , "July" ,"August" ,"September" , "October" , "November" , "December"];
    let days =  ["Sunday" , "Monday", "Monday", "Tuesday", "Wednesday", "Friday", "Saturday" ];
    return `${days[de.getDay()]} ${(de).getDate()} ${month[de.getMonth()]} ${de.getFullYear()}`;
}
app= document.querySelector(".app");
function change(c) {
    if (c=="Broken clouds") {
        app.style.background = " url(./Images/rainy.jpg) no-repeat center center/cover rgba(0,0,0,0.9)";
    }
    else if (c=="Light rain") {
        app.style.background = " url(./Images/sunny.jpg) no-repeat center center/cover rgba(0,0,0,0.9)";
        document.querySelector(".location").style.color = "black";
    }
    else if (c=="Overcast clouds") {
        app.style.background = " url(./Images/rainy.jpg) no-repeat center center/cover rgba(0,0,0,0.9)";
        document.querySelector(".location").style.color = "black";
    }
    else {
        app.style.background = " url(./Images/cloud.jpg) no-repeat center center/cover rgba(0,0,0,0.9)";
    }
    
}
