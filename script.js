let city=document.querySelector("#city");
let img=document.querySelector("img");
let temp=document.querySelector("#temp");
let type=document.querySelector("#type");
let input=document.querySelector("#inp");
let api_key="562da53de35295fded43d4d16069c010";

const data=async function(search){
    let getdata= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${api_key}&units=metric`);
    console.log(getdata);
    let jsondata= await getdata.json();
    console.log(jsondata);
      
     if(jsondata.cod==400){
      alert("Enter Your Location");
      img.src="img/404.jpg"
      return;

     }
     if(jsondata.cod==404){
      alert("Enter Right Location");
      city.innerHTML=search;
      img.src="img/404.jpg"
      return;
     }

    city.innerHTML=search;
    temp.innerHTML=Math.floor(jsondata.main.temp)+"°C";
    type.innerHTML=jsondata.weather[0].main;

    if(type.innerHTML==="Clouds"){
        img.src="img/cloud.jpg";
    }else if(type.innerHTML==="Clear"){
       img.src="img/clear.jpg";
    }
    else if(type.innerHTML==="Rain"){
       img.src="img/rain.jpg";
    }
    else if(type.innerHTML==="Thunderstorm"){
       img.src="img/Thunderstorm.png";
    }
    else if(type.innerHTML==="Snow"){
       img.src="img/snow.jpg";
    }
    else if(type.innerHTML==="Haze"){
      img.src="img/haze.png";
   }
    input.value="";
 }
  input.addEventListener("keydown",(press)=>{
      if(press.key==="Enter"){
         myfun();
      }
    });

function myfun(){
    let search=input.value;
    data(search);
    
}



   