const axios = require("axios");

axios({
    "method":"GET",
    "url":"https://billboard-api2.p.rapidapi.com/hot-100",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"billboard-api2.p.rapidapi.com",
    "x-rapidapi-key":process.env.REACT_APP_BILLBOARD,
    "useQueryString":true
    },"params":{
    "date":"2000-05-11",
    "range":"1-10"
    }
    })
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })