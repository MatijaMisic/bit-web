'use strict';

// // XML
// function request(ip) {
//     var xhr = new XMLHttpRequest();

//     xhr.open('GET', 'https://www.freegeoip.net/xml/' + ip);

//     xhr.send();

//     xhr.onload = function () {

//         var xmlDoc = xhr.responseXML;

//         var a = xmlDoc.querySelector("CountryName").textContent;

//         var h1 = document.querySelector("#countryName");

//         h1.textContent = a;

//     }
// }

// JSON
function request(ip) {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://www.freegeoip.net/json/' + ip);

    xhr.send();

    xhr.onload = function () {

        var data = JSON.parse(xhr.responseText);

        var h1 = document.querySelector("#countryName");
        h1.textContent = data.country_name;

        var p = document.querySelector("#lat");
        p.textContent = 'latitude: ' + data.latitude + ', longitude: ' + data.longitude;
    }
}

request("82.117.204.106");