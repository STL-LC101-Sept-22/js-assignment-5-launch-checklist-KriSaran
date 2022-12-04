// Write your JavaScript code here!
window.addEventListener("load", function(event) {
   let form=document.getElementById("launchForm");
   let listedSelected;
   let listedPlanetsResponse;
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   listedPlanetsResponse=myFetch();
   listedPlanetsResponse.then(function (result) {
    console.log(result);
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    listedSelected = pickPlanet(listedPlanets);
     addDestinationInfo(document,listedSelected.name,listedSelected.diameter,listedSelected.stars,listedSelected.distance,listedSelected.moons,listedSelected.image);
   });

 let list=document.getElementById('faultyItems');
 list.style.visibility="hidden";

   form.addEventListener("submit", function(event){
    event.preventDefault();
    const pilotName = document.getElementById('pilotName').value;
    const coPilotName=document.getElementById('copilotName').value;
    const fuelLevel=document.getElementById('fuelLevel').value;
    const cargoMass=document.getElementById('cargoMass').value;
    formSubmission(document,list,pilotName,coPilotName,fuelLevel,cargoMass);
  });
  //event.preventDefault();
  });







