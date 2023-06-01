//full weather
const weatherAPI = () => {
    let cityname = document.getElementsByClassName("cityname")[0];
    let region = document.getElementsByClassName("regionname")[0];
    let latitude = document.getElementsByClassName("latitude")[0];
    let longitude = document.getElementsByClassName("longitude")[0];
    let localtime = document.getElementsByClassName("localtime")[0];
    let temp = document.getElementsByClassName("temp")[0];
    let error = document.getElementsByClassName("error")[0];
    let visibility = document.getElementsByClassName("visibility")[0];
    let wind = document.getElementsByClassName("wind")[0];
    let humidity = document.getElementsByClassName("humidity")[0];
    let pressure = document.getElementsByClassName("pressure")[0];
    let precip = document.getElementsByClassName("precip")[0];
    let cityweather = document.getElementById("cityweather");
    let geninfo = document.getElementById("geninfo");
    let icon = document.getElementsByClassName("icon")[0];
    
    let area = document.getElementById("city").value;
    fetch(`https://api.weatherapi.com/v1/current.json?key=a5734f426b354ff9aab61937230203&q=${area}&aqi=no`).then(response => {
        console.log('response', response)
        return response.json()
    }).then(data => {
        console.log(data);
        console.log(data.current.condition.text);
        console.log(cityname);
        error.innerText = "";
        cityname.innerText = "City: " + data.location.name;
        region.innerText = "Region: " + data.location.region;
        latitude.innerText = "Latitude: " + data.location.lat;
        longitude.innerText = "Longitude: " +data.location.lon;
        localtime.innerText = "Local Time: " + data.location.localtime;
        temp.innerHTML = 
        `<i class="wi wi-thermometer"></i> Temperature: ${data.current.temp_c} deg C`
        visibility.innerHTML = 
        `<i class="wi wi-dust"></i> Visibility: ${data.current.vis_km} KM`
        wind.innerHTML = 
        `<i class="wi wi-strong-wind"></i> Wind: ${data.current.wind_kph} Kmph`
        precip.innerHTML = 
        `<i class="wi wi-umbrella"></i> Precipitation: ${data.current.precip_mm} mm`
        humidity.innerHTML = 
        `<i class="wi wi-humidity"></i> Humidity: ${data.current.humidity} %`
        pressure.innerHTML = 
        `<i class="wi wi-barometer"></i> Pressure: ${data.current.pressure_mb} mbar`
        geninfo.innerText = `The weather in ${data.location.name} is ${data.current.condition.text} right now.`
        icon.innerHTML = `<img src="${data.current.condition.icon}" width=80px>`
        cityweather.innerText = `City: ${data.location.name}`
    }).catch(err => {
        console.log('Cannot Find Area');
        error.innerText = "* Cannot Find Area / City";
        
    })
    
    return false

    
}; 




//chennai weather

const weatherch=()=>{
    let temp=document.getElementsByClassName("temp")[0];
    let loc=document.getElementsByClassName("loc")[0];
    let wind=document.getElementsByClassName("wind")[0];
    let icon=document.getElementsByClassName("icon")[0];
    let error = document.getElementsByClassName("error")[0];


fetch(`https://api.weatherapi.com/v1/current.json?key=a5734f426b354ff9aab61937230203&q=chennai&aqi=no`).then(response=>{
    console.log('response',response)
    return response.json()
}).then(data=>{
    console.log(data);
    temp.innerHTML =  `<i class="wi wi-thermometer"></i> Temperature: ${data.current.temp_c} deg C`
    wind.innerHTML =  `<i class="wi wi-strong-wind"></i> humidity: ${data.current.humidity} %`
    icon.innerHTML = `<img src="${data.current.condition.icon}" width=80px>`
    loc.innerHTML = data.location.name;


}).catch(err => {
    console.log('Cannot Find Area');
    error.innerText = "* Cannot Find Area / City";
    
})

// weatherch();

// return false;
};


//news


let apikey="6478f57dab96414386f003c2057105fe";

const news1=()=>{
    let tit1=document.getElementsByClassName("tit1")[0];
    let tit2=document.getElementsByClassName("tit2")[0];
    let tit3=document.getElementsByClassName("tit3")[0];
    let error = document.getElementsByClassName("error")[0];


fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=technology&pageSize=3`).then(response=>{
    console.log('response',response)
    return response.json()
}).then(data=>{
    console.log(data);
    tit1.innerText=data.articles[0].title;
    tit2.innerText=data.articles[1].title;
    tit3.innerText=data.articles[2].title;
    error.innerText = " ";


}).catch(err => {
    console.log('Cannot Find Area');
    error.innerText = "no news";
    
})




return false;
};

const news2=()=>{
    let tit1=document.getElementsByClassName("tit1")[0];
    let tit2=document.getElementsByClassName("tit2")[0];
    let tit3=document.getElementsByClassName("tit3")[0];
    let error = document.getElementsByClassName("error")[0];


fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=sports&pageSize=3`).then(response=>{
    console.log('response',response)
    return response.json()
}).then(data=>{
    console.log(data);
    tit1.innerText=data.articles[0].title;
    tit2.innerText=data.articles[1].title;
    tit3.innerText=data.articles[2].title;
    error.innerText = " ";


}).catch(err => {
    console.log('Cannot Find Area');
    error.innerText = "no news";
    
})

return false;
};



const news3=()=>{
    let tit1=document.getElementsByClassName("tit1")[0];
    let tit2=document.getElementsByClassName("tit2")[0];
    let tit3=document.getElementsByClassName("tit3")[0];
    let error = document.getElementsByClassName("error")[0];


fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=business&pageSize=3`).then(response=>{
    console.log('response',response)
    return response.json()
}).then(data=>{
    console.log(data);
    // tit1.innerText=`<a href=${data.articles[0].url}>${data.articles[0].title}</a>`
    tit1.setAttribute("href",data.articles[0].url);
    tit1.innerText=data.articles[0].title;
    tit2.innerText=data.articles[1].title;
    tit3.innerText=data.articles[2].title;
    error.innerText = " ";


}).catch(err => {
    console.log('Cannot Find Area');
    error.innerText = "no news";
    
})




return false;
};

const news4=()=>{
    let tit1=document.getElementsByClassName("tit1")[0];
    let tit2=document.getElementsByClassName("tit2")[0];
    let tit3=document.getElementsByClassName("tit3")[0];
    let error = document.getElementsByClassName("error")[0];


fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=science&pageSize=3`).then(response=>{
    console.log('response',response)
    return response.json()
}).then(data=>{
    console.log(data);
    tit1.innerText=data.articles[0].title;
    tit2.innerText=data.articles[1].title;
    tit3.innerText=data.articles[2].title;
    error.innerText = " ";


}).catch(err => {
    console.log('Cannot Find Area');
    error.innerText = "no news";
    
})




return false;
};

//to do
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') 
      alert("You must write something!");
    else 
      document.getElementById("myUL").appendChild(li);
  
  }

//stocks

const stocks=(sym)=>{
    let t=document.getElementsByClassName("tit6")[0];
    let t2=document.getElementsByClassName("tit5")[0]
   
    let error=document.getElementsByClassName("error")[0];
 
fetch(`https://finnhub.io/api/v1/quote?symbol=${sym}&token=chrvf09r01ql90jcl2a0chrvf09r01ql90jcl2ag`).then( response => {
    console.log('response',response)
    return response.json()
}).then(data=>{
    console.log(data);
    //s1.innerHTML=`<div class='symbol>${sym}</div><div class="value">${data.c}</div>`;

    t.innerText=`${sym}`;
    t2.innerText=`current price--$${data.c}`;

}).catch(err => {
    console.log('its a error bro');
    error.innerText = "stock not found";
    
})
return false;
};

const stocks2=(sym)=>{
    let t=document.getElementsByClassName("tit7")[0];
    let t2=document.getElementsByClassName("tit8")[0]
   
    let error=document.getElementsByClassName("error")[0];
 
fetch(`https://finnhub.io/api/v1/quote?symbol=${sym}&token=chrvf09r01ql90jcl2a0chrvf09r01ql90jcl2ag`).then( response => {
    console.log('response',response)
    return response.json()
}).then(data=>{
    console.log(data);
    //s1.innerHTML=`<div class='symbol>${sym}</div><div class="value">${data.c}</div>`;

    t.innerText=`${sym}`;
    t2.innerText=`current price--$${data.c}`;

}).catch(err => {
    console.log('its a error bro');
    error.innerText = "stock not found";
    
})
return false;
};


const stocks3=(sym)=>{
    let t=document.getElementsByClassName("tit9")[0];
    let t2=document.getElementsByClassName("tit10")[0]
   
    let error=document.getElementsByClassName("error")[0];
 
fetch(`https://finnhub.io/api/v1/quote?symbol=${sym}&token=chrvf09r01ql90jcl2a0chrvf09r01ql90jcl2ag`).then( response => {
    console.log('response',response)
    return response.json()
}).then(data=>{
    console.log(data);
    //s1.innerHTML=`<div class='symbol>${sym}</div><div class="value">${data.c}</div>`;

    t.innerText=`${sym}`;
    t2.innerText=`current price--$${data.c}`;

}).catch(err => {
    console.log('its a error bro');
    error.innerText = "stock not found";
    
})
return false;
};


stocks("AAPL");
stocks2("TSLA");
stocks3("GOOGL");
// stocks("TSLA");
// stocks("AAPL");
news1();
weatherch();