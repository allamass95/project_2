
var access_token = "pk.eyJ1IjoiZW1hbmxsYW1hcyIsImEiOiJjazE4aDRpbTkwMXc5M25uMXkxaGVuZm0wIn0.YX9h8sM6yTQnR-F1Z97esw";

let year = '2011'
var legis_url = `/api/legislators/${year}`;


function loadMap(year=2013) {
    
    console.log('loading map');

    //let legis_url = `/api/ligislators/${year}`;
    
    d3.json('static/data/state_data.json').then(statesData => {
        console.log("statesdata", statesData);
        d3.json(legis_url).then(legisData => {
            
            console.log("leg data", legisData);
            let legisControlDict = {};
            legisData.forEach( d => {
                let curState = d.state.replace('-', ' ');
                legisControlDict[curState] = d.legis_control;
            });
            console.log("legiscontroldict", legisControlDict);

            features = statesData.features;

            features.forEach(f => {
                curState = f.properties.name
                console.log("tryuing to match", curState, "to", legisControlDict[curState] )
                f.properties['legis_control'] = legisControlDict[curState];
            });
  
            console.log("updated featurs", features);
            

            corner1 = L.latLng(15.45, -163.3),
            corner2 = L.latLng(65.36, -44.47),
            bounds = L.latLngBounds(corner1, corner2);

            // const map = L.map('map', {
            //     //maxBounds: bounds
            // }).setView([37.8, -96], 4);

            let map = L.map('map').setView([37.8, -96], 4);

           
            L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
                attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>, <br> Created by Jonathan Randolph",
                maxZoom: 6,
                minZoom: 3,
                maxBounds: map.getBounds(),
                id: "mapbox.light",
                accessToken: access_token
            }).addTo(map);
    
                
            function getColor(x){
                let returnColor = '#7fbf7b';
                if ( x.legis_control === 'Rep') {
                    returnColor = '#fc8d59';
                }
                else if (x.legis_control === 'Dem') {
                    returnColor = '#91bfdb';
                }
                else if (x.legis_control === 'Split') {
                    returnColor = '#ffffbf'
                }
                // return x == 'Rep' ? '#fc8d59' :
                // x == 'Dem' ? '#91bfdb' :
                // x == 'Split' ? '#ffffbf' :
                //                 '#7fbf7b'; 
                console.log('rep, color', x.name, x.legis_control, returnColor);
                return returnColor;
            }
                      
            function style(feature) {
                return {
                    fillColor: getColor(feature.properties),
                    weight: 2,
                    opacity: 1,
                    color: 'white',
                    dashArray: '3',
                    fillOpacity: 0.7
                };
            }

            L.geoJson(statesData, {
                style: style
            }).addTo(map)
        

            });
        });

    }

console.log("about to create base map");
loadMap(year);
