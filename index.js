// ======== Required values ======== 
// WARNING: don't publish these to public repositories or in public places!
// NOTE: values below are sample values, to get your own values go to https://api.podcastindex.org 
var apiKey = "ABC";
var apiSecret = "ABC"
// ======== Hash them to get the Authorization token ======== 
let crypto = require('crypto');
var apiHeaderTime = Math.floor(Date.now()/1000); //console.log(`apiHeaderTime=[${apiHeaderTime}]`);
var sha1Algorithm = "sha1"; var sha1Hash = crypto.createHash(sha1Algorithm);
var data4Hash = apiKey + apiSecret + apiHeaderTime;
sha1Hash.update(data4Hash); var hash4Header = sha1Hash.digest('hex'); console.log(`hash4Header=[${hash4Header}]`);
// ======== Send the request and collect/show the results ======== 
const fetch = require('node-fetch');
let options = 
 {  method: "get",
    headers: { 
     // not needed right now, maybe in future:  "Content-Type": "application/json",
      "X-Auth-Date": ""+apiHeaderTime,
      "X-Auth-Key": apiKey,
      "Authorization": hash4Header,
      "User-Agent": "SuperPodcastPlayer/1.8"
    },
 };
var query = "bastiat"; var url = "https://api.podcastindex.org/api/1.0/search/byterm?q="+query; 
fetch(url, options)
.then(res => res.json())
.then(json => { console.log(json); } );

