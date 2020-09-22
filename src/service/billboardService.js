const axios = require("axios");

export default function getTopTen(date){
axios({
    method:"GET",
    url:"https://billboard-api2.p.rapidapi.com/hot-100",
    headers: {
    "content-type": "application/octet-stream",
    "x-rapidapi-host": "billboard-api2.p.rapidapi.com",
    "x-rapidapi-key": process.env.REACT_APP_BILLBOARD,
    "useQueryString": true
    },
    params: {
    "date": date,
    "range": "1-10"
    }
    })
    .then((response)=>{
      //console.log(response)
      let a=Object.values(response)
      let b=Object.values(a[0])
      let c=Object.values(b[1])
      let strings='<ol>';
      //turns object into sets of arrays
      c.forEach(song=>{
        let info=Object.values(song);
        //pulls songs and artists from array
        strings+=`<li>${info[1]}<br/>${info[2]}</li><br/>`
        //console.log(JSON.stringify(info))
      })
      strings+='</ol>';
      //adds the list of songs to the "songs" row of the table
      document.getElementById('songs').innerHTML=`${'<h1>Billboard\'s Top Ten Hits:</h1><br/><h3>'+strings+'</h3>'}`;
    })
    .catch((error)=>{
      console.log(error)
    })
   }
