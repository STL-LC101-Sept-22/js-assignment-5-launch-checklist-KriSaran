// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

              const destination=document.getElementById("missionTarget");
                  
                     destination.innerHTML = `
                     <h2>Mission Destination</h2>
                     <ol>
                         <li>Name: ${name} </li>
                         <li>Diameter: ${diameter}</li>
                         <li>Star: ${star}</li>
                         <li>Distance from Earth: ${distance} </li>
                         <li>Number of Moons: ${moons} </li>
                     </ol>
                     <img src="${imageUrl}">
                     `;
     }

 
function validateInput(testData) {

    if(/\d/.test(testData)){
        return "Is Number";
    }

    if(testData.trim().length==0) {
        return "Is Empty";
    }

    if(!(/\d/.test(testData))) {
        return "Value is String";
    }

    if(Number.isInteger(testData)){
        return "Is Number"; 
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
    const pilotStatus = document.getElementById('pilotStatus');
    const copilotStatus=document.getElementById('copilotStatus');
    const fuelStatus=document.getElementById('fuelStatus');
    const cargoStatus=document.getElementById('cargoStatus');
    let val1 = validateInput(pilot);
    let val2 = validateInput(copilot);
    let val3 = validateInput(fuelLevel);
    let val4 = validateInput(cargoLevel);  
    if(val1==="Value is String" && val2 ==="Value is String" && val3 ==="Is Number" && val4 ==="Is Number") {

        list.style.visibility="visible";
      pilotStatus.innerHTML =`Pilot ${pilot} is ready for launch`;
      copilotStatus.innerHTML=`Co-Pilot ${copilot} is ready for launch`;
    if (fuelLevel < 10000 && cargoLevel > 10000) {
            
        launchStatus.innerHTML="Shuttle is NOT ready for launch";
        launchStatus.style.color="red";
        fuelStatus.innerHTML=`Fuel level is too low for launch `;
        cargoStatus.innerHTML=`CargoMass too high for launch`;
        fuelLevel.onfocus();
        cargoMass.onfocus();

    } else if (fuelLevel < 10000 && cargoLevel <= 10000){
        launchStatus.innerHTML="Shuttle is NOT ready for launch";
        launchStatus.style.color="red";
        fuelStatus.innerHTML=`Fuel level is too low for launch `;
        cargoStatus.innerHTML=`CargoMass very low enough for launch`;
        fuelLevel.onfocus();
        cargoMass.onfocus();
        
    }else if (fuelLevel > 10000 && cargoLevel > 10000){
        launchStatus.innerHTML="Shuttle is NOT ready for launch";
        launchStatus.style.color="red";
        fuelStatus.innerHTML=`Fuel level is high enough launch `;
        cargoStatus.innerHTML=`CargoMass too heavy enough for launch`;
        fuelLevel.onfocus();
        cargoMass.onfocus();
        
    }else{
        launchStatus.innerHTML="Shuttle is ready for Launch!!!";
        launchStatus.style.color="green";
        fuelStatus.innerHTML=`Fuel level is high enough launch `;
        cargoStatus.innerHTML=`CargoMass low enough for launch`;
    }

    }else{
      if(val1==="Is Empty" && val2 ==="Is Empty" && val3 ==="Is Empty" && val4 ==="Is Empty") {
        alert("All fields required");
      } else {
        alert("Make sure to enter valid information for all fields");
      }
    }
 
   
}

async function myFetch() {
   
    let planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    let returnedPlanets = await planetsReturned.json();
  
    return returnedPlanets;
};

function pickPlanet(planets) {

    let randomValue = planets[Math.floor(planets.length * Math.random())];
   return randomValue;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
