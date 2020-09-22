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
    //let allMetaData = EXIF.getAllTags(this);
    //console.log(allMetaData)

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
        //months for prettier dates
        const months = ["","January", "February", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"];
        //breaks down exif data into usable arrays
        let a=Object.values(response)
        let b=Object.values(a[0])
        //formats the date into a presentable format
        let dsplit=gpsD.split(':');
        let drev=dsplit.reverse();
        drev[1]=months[drev[1]];
        let mon=drev[1];
        let day=drev[0];
        //swaps day with month to make dd/mm/yyyy format
        drev[0]=mon;drev[1]=day;
        let djoin=drev.join(':');
        //formats date to acceptable format for api and calls billboard function
        billboard(gpsD.replace(/:/g,'-'))
        //displays the location and date on the table
        document.getElementById('loc').innerHTML=`<p>${b[16]}</p>`;
        document.getElementById('dates').innerHTML=`<p>${djoin.replace(/:/g,' / ')}</p>`
        }).catch(error => {
            console.log(error);
          });
  });
}