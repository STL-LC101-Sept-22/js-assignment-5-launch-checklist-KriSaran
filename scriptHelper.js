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
        return "Is a Number";
    }

    if(testData.trim().length==0) {
        return "Empty";
    }

    if(!(/\d/.test(testData))) {
        return "Not a Number";
    }

    if(Number.isInteger(testData)){
        return "Is a Number"; 
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const launchStatus=document.getElementById('launchStatus');
    const pilotStatus = document.getElementById('pilotStatus');
    const copilotStatus=document.getElementById('copilotStatus');
    const fuelStatus=document.getElementById('fuelStatus');
    const cargoStatus=document.getElementById('cargoStatus');
    let val1 = validateInput(pilot);
    let val2 = validateInput(copilot);
    let val3 = validateInput(fuelLevel);
    let val4 = validateInput(cargoLevel);  
    if(val1==="Not a Number" && val2 ==="Not a Number" && val3 ==="Is a Number" && val4 ==="Is a Number") {

        list.style.visibility="visible";
        pilotStatus.innerHTML =`Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML=`Co-pilot ${copilot} is ready for launch`;
    if (fuelLevel < 10000 && cargoLevel > 10000) {
            
        launchStatus.innerHTML="Shuttle Not Ready for Launch";
        launchStatus.style.color="rgb(199, 37, 78)";
        fuelStatus.innerHTML=`Fuel level too low for launch`;
        cargoStatus.innerHTML=`Cargo mass too heavy for launch`;
     
    } else if (fuelLevel < 10000 && cargoLevel <= 10000){
        launchStatus.innerHTML="Shuttle Not Ready for Launch";
        launchStatus.style.color="rgb(199, 37, 78)";
        fuelStatus.innerHTML=`Fuel level too low for launch`;
        cargoStatus.innerHTML=`Cargo mass low enough for launch`;
    
    }else if (fuelLevel > 10000 && cargoLevel > 10000){
        launchStatus.innerHTML="Shuttle Not Ready for Launch";
        launchStatus.style.color="rgb(199, 37, 78)";
        fuelStatus.innerHTML=`Fuel level high enough for launch`;
        cargoStatus.innerHTML=`Cargo mass too heavy for launch`;
      
    }else if (fuelLevel == 10000 && cargoLevel > 10000){
        launchStatus.innerHTML="Shuttle Not Ready for Launch";
        launchStatus.style.color="rgb(199, 37, 78)";
        fuelStatus.innerHTML=`Fuel level high enough for launch`;
        cargoStatus.innerHTML=`Cargo mass too heavy for launch`;
      
    }else{
        launchStatus.innerHTML="Shuttle is Ready for Launch";
        launchStatus.style.color="rgb(65, 159, 106)";
        fuelStatus.innerHTML=`Fuel level high enough for launch`;
        cargoStatus.innerHTML=`Cargo mass low enough for launch`;
    }

    }else{
      if(val1==="Empty" && val2 ==="Empty" && val3 ==="Empty" && val4 ==="Empty") {
        alert("All fields required");
      } else {
        alert("Make sure to enter valid information for all fields");
      }
    }
 
   
}

async function myFetch() {

    let planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
        
   if (response.status <=500) {
        return response.json();
      } else {
        throw new Error(response.status);
      }

    });
 return planetsReturned;  
 
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
