// Write your JavaScript code here!
//DO NOT MODIFY STYLES.CSS

// let planets = [];
function fetchPlanets() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) { 
      response.json().then( function(json) {
         // planets = json.planets
         console.log(response);

         index = Math.floor(Math.random() * json.length);
         console.log("index", index)
   
         const div = document.getElementById("missionTarget");
         div.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[index].name}</li>
               <li>Diameter: ${json[index].diameter}</li>
               <li>Star: ${json[index].star}</li>
               <li>Distance from Earth: ${json[index].distance}</li>
               <li>Number of Moons: ${json[index].moons}</li>
            </ol>
            <img src="${json[index].image}">
            `;
   
      });
   });
}

window.addEventListener("load", function() {
   console.log("Confirm page load.");
   fetchPlanets();
   init();
});

function init() {
   const form = document.querySelector("form");
   const pilotNameInput = document.querySelector("input[name=pilotName]");
   const copilotNameInput = document.querySelector("input[name=copilotName]");
   const fuelLevelInput = document.querySelector("input[name=fuelLevel]");
   const cargoMassInput = document.querySelector("input[name=cargoMass]");
   const pilotStatus = document.getElementById("pilotStatus");
   const copilotStatus = document.getElementById("copilotStatus"); 
   const faultyItems = document.getElementById("faultyItems");
   const fuelStatus = document.getElementById("fuelStatus");
   const cargoStatus = document.getElementById("cargoStatus");
   const launchStatus = document.getElementById("launchStatus");

   form.addEventListener("submit", function(event) {  
      event.preventDefault();  


//VALIDATION
      //CHECK PILOT NAME INPUT
      let pilotNameVerified = true;
      let copilotNameVerified = true;

      if (pilotNameInput.value === "") {
         alert("Pilot Name is required!"); 
         pilotNameVerified = false;
      } // checks to make sure field is not empty

      else if (!isNaN(pilotNameInput.value)) {
         alert("Pilot Name Error! Unless this is a robot with all numbers for a name, is this really the right input?");
         pilotNameVerified = false;         
      } // checks to make sure field is not a number

      //CHECK CO-PILOT NAME INPUT
      if (copilotNameInput.value === "") {
         alert("Co-Pilot Name is required!"); 
         copilotNameVerified = false;             
      } // checks to make sure field is not empty

      else if (!isNaN(copilotNameInput.value)) {
         alert("Co-Pilot Name Error! Unless this is a robot with all numbers for a name, is this really the right input?");
         copilotNameVerified = false;    
      } // checks to make sure field is not a number

      //CHECK FUEL LEVEL INPUT
      if (fuelLevelInput.value === "") {
         alert("Fuel Level is required!"); 
      } // checks to make sure field is not empty
  
      else if (fuelLevelInput.value <= 0) {
         alert("Fuel Level Error! Verify fuel levels are greater than 0.");   
      } // checks to make sure field is greater than zero

      else if (isNaN(fuelLevelInput.value)) {
         alert("Fuel Level Error! That isn't a number. Did you accidentally put the Pilot's name here?");   
      } // checks to make sure field is not a text string

      //CHECK CARGO MASS INPUT
      if (cargoMassInput.value === "") {
         alert("Cargo Mass is required!"); 
      } // checks to make sure field is not empty

      else if (cargoMassInput.value <= 0) {
         alert("Cargo Mass Error! Verify cargo mass is greater than 0.");   
      } // checks to make sure field is greater than zero

      else if (isNaN(cargoMassInput.value)) {
         alert("Cargo Mass Error! That isn't a number. Did you accidentally put the Co-Pilot's name here?");   
      } // checks to make sure field is not a text string

//UPDATE FAULTY ITEMS
      if(pilotNameVerified === false) {
         pilotStatus.innerHTML = `Verify Pilot Input. Not ready for launch.`;
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         pilotStatus.style.color = "red";         
      } else {
         pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch.`;
         pilotStatus.style.color = "black";
   };

      if(copilotNameVerified === false) {
         copilotStatus.innerHTML = `Verify Co-Pilot Input. Not ready for launch.`;
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         copilotStatus.style.color = "red"; 
      } else {
         copilotStatus.innerHTML = `CoPilot ${copilotNameInput.value} is ready for launch`;
         copilotStatus.style.color = "black";
      };
      
      if(fuelLevelInput.value < 10000) {
         faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = `Alert! Fuel Status is ${fuelLevelInput.value}. There is not enough fuel for the journey.`;
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         fuelStatus.style.color = "red";
      } else {
         fuelStatus.innerHTML = `Fuel levels within allowable parameters. Ready for launch.`;
         fuelStatus.style.color = "black";
      };

      if(cargoMassInput.value >= 10000) {
         faultyItems.style.visibility = "visible";
         cargoStatus.innerHTML = `Alert! Cargo Mass is ${cargoMassInput.value}. There is too much mass for the shuttle to take off.`;
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         cargoStatus.style.color = "red";
      } else {
         cargoStatus.innerHTML = `Cargo mass within allowable parameters. Ready for launch.`;
         cargoStatus.style.color = "black";      
      };

      if(fuelLevelInput.value >= 10000 && cargoMassInput.value < 10000 && pilotNameVerified && copilotNameVerified)  {
         launchStatus.innerHTML = "Shuttle is ready for launch";
         launchStatus.style.color = "green";    
      }



   });

}


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

