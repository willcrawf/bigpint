const axios = require("axios");

export default function getTopTen(date){
let a=axios({
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
    //!change range to 2 in order to limit youtube quota consumption
    "range": "1-10"
    }
    })
    .then((response)=>{
      //console.log(response)
      let a=Object.values(response)
      let b=Object.values(a[0])
      let c=Object.values(b[1])
      let strings='<h1>Top Ten Hits on This Day:</h1><br/><h3><ol>';
      //const yt=process.env.REACT_APP_YOUTUBE;
      //turns object into sets of arrays
      c.forEach(song=>{
        let info=Object.values(song);
        //let songS=info[1].replace(/ /g,'%20')
        //let artistS=info[2].replace(/ /g,'%20')
        //pulls songs and artists from array
        strings+=`<li><a href="https://www.youtube.com/embed/">${info[1]} By ${info[2]}</a></li><br/>`
        //console.log(JSON.stringify(info))
        // axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q='+songS+'%20'+artistS+'&key='+yt)
        // .then(response => {
        //   let ytA=Object.values(response)
        //   console.log(ytA)
        //   let ytB=Object.values(ytA[0])
        //   let ytC=Object.values(ytB[5])
        //   let ytD=Object.values(ytC[0])
        //   console.log(ytD);
        // })
        //.catch(error => {console.log(error)})
      })
      strings+='</ol></h3>';
      //adds the list of songs to the "songs" row of the table
      let rslt=strings;
      //console.log(rslt)
      return(rslt)
    })
    .catch((error)=>{console.log(error)})
    return(a)
  }