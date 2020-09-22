import EXIF from 'exif-js';
import billboard from './billboardService'
const axios = require('axios');
/**
 * You have to add these tags to app.jsx in order to debug
 * 
 * import exifImg from "../../services/gpsService";
 * <img src="a.jpg" alt="" id="img" />
 * <pre id="allMetaDataSpan"></pre>
 * <button onClick={exifImg}>Click</button>
 */

export default function exifImg()
{
  let LoDD="";
  let LaDD="";
  const img = document.getElementById('pic');

  EXIF.getData(img, function()
  {
    //gets all meta-data
    let allMetaData = EXIF.getAllTags(this);
    console.log(allMetaData)
    //check for gps data
    if(EXIF.getTag(this,"GPSLatitude")===undefined || EXIF.getTag(this,"GPSLongitude"===undefined)){return console.log('error: No GPS')}

/** 
 * 
 * the way it works is that you get the meta data you're looking for by declaring it's meta-data reference name where the example says here 
 * 
 * EXIF.getTag(this, "here")
 * 
 * the photo you submit can be retrieved by using the above variable named img
 * 
 * **/


    //latitude ref
    //let gpsLaRef = EXIF.getTag(this, "GPSLatitudeRef");
    
    //latitude co-ords
    let gpsLa = EXIF.getTag(this, "GPSLatitude");
    
    //logitude co-ords
    let gpsLo = EXIF.getTag(this, "GPSLongitude");

    //date photo was taken
    let gpsD = EXIF.getTag(this,'GPSDateStamp');
    //convert Lat and Long to Decimal Degrees using this formula
    //DD = d + (min/60) + (sec/3600)

    //Latitude DD
    LaDD = gpsLa[0]+(gpsLa[1]/60)+(gpsLa[2]/3600);
    //Longtitude DD
    LoDD = gpsLo[0]+(gpsLo[1]/60)+(gpsLo[2]/3600);

    const geo=process.env.REACT_APP_GEO_API;
    axios.get('https://geocode.xyz/'+LaDD+','+LoDD+'?geoit=json&auth='+geo)
      .then(response => {
        //console.log(response)
        //months for prettier dates
        const months = ["","January", "February", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"];
        //breaks down exif data into usable arrays
        let a=Object.values(response)
        let b=Object.values(a[0])
        console.log(b)
        //formats the date into a presentable format
        let dsplit=gpsD.split(':');
        let drev=dsplit.reverse();
        drev[1]=months[drev[1]];
        let mon=drev[1];
        let day=drev[0];
        //making day look pretty
        let ending = ["th","st","nd","rd"];
        let endD = day.length-1;
        switch(day[endD])
        {
          case '1':day+=ending[1];break;
          case '2':day+=ending[2];break;
          case '3':day+=ending[3];break;
          default:day+=ending[0];
        }
        //swaps day with month to make dd/mm/yyyy format
        drev[0]=mon;drev[1]=day;
        let djoin=drev.join(':');
        //formats date to acceptable format for api and calls billboard function
        billboard(gpsD.replace(/:/g,'-'))
        //displays the location and date on the table
        document.getElementById('loc').innerHTML=`<p><img src="https://flagcdn.com/${b[7].toLowerCase()}.svg" width="25px" alt="${b[10]}">${b[16]}</p>`;//7 for initials
        document.getElementById('dates').innerHTML=`<p>on ${djoin.replace(/:/g,' ')}</p>`
        }).catch(error => {
            console.log(error);
          });
  });
}