/* Global Variables */
let Url = "https://api.openweathermap.org/data/2.5/forecast?zip=",          
 generateBTn = document.querySelector("#generate"),          
 dateToday = document.querySelector("#date"),               
 tempToday = document.querySelector("#temp"),  
 city = document.querySelector("#city"),  
 error = document.querySelector("#error"),                 
 country = document.querySelector("#country"),                
 feelingToday = document.querySelector("#content"),
 d = new Date(),
  newDate=(d.getMonth() + 1) + "-" + d.getDate() + "-" + d.getFullYear();

/* trigger a callback function with a click event on button */
generateBTn.addEventListener("click",()=>{    
    const apiKey = "&units=imperial&appid=834f67f9fbd8063374b8d61f5a0fbf95", 
     zipValue = document.querySelector("#zip").value,
    feelingValue = document.querySelector("#feelings").value,
     fullUrl = `${Url}${zipValue}${apiKey}`;
    weatherInfo(fullUrl,zipValue) //trigger another callback function
    .then((getdata)=>{
            postData("/postData",{
                date:newDate,
                city:getdata.city.name,
                country:getdata.city.country,
                temp:`${getdata.list[0].main.temp}  °F  /  ${(((getdata.list[0].main.temp + 40) / 1.8) - 40).toFixed(1)}  °C`, 
                
                content:feelingValue
            })
            updateUI(); //trigger another callback function
            
        })
});

// Function to GET Web API Data
const weatherInfo = async (Link,zipC)=>{
    if(zipC.length != 5 ){
        error.innerText = "Enter a valid zip code value";
         return false;
     }
    const response = await fetch(Link) 
    try{
        const getdata = await response.json();  
            return getdata;   
    }
    catch(error){
        console.log("error",error);
    }

};

// Function to POST Web API Data
const postData = async (url="",data = {})=>{
    console.log(data);
    const res = await fetch(url,{
        method: "POST",
        credentials: "same-origin",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data) 
    });
    try{
        const newData = await res.json();
        return newData;
    }
    catch(error){
        console.log("error",error);
    }
};

// Function to GET Project Data
const updateUI = async ()=>{
    const req = await fetch("/receivedData");
    try{
        const allData = await req.json();
        dateToday.innerText = `Date: ${allData.date}`;
        city.innerText =  `City: ${allData.city}`;
        country.innerText = `Country: ${allData.country}`;
        tempToday.innerText =  `Temperature: ${allData.temp}`;
        feelingToday.innerText = `I feel: ${allData.content}`;
    }
    catch(error){
        console.log("error",error);
    }
}
