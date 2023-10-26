// This file contains any logic that needs to run once when the page loads.

// import { getWeekResources } from "../../BACK/resources/resources.controller";

/* 
1) Select button from index.html file
2) Add EventListener(Click) to this button
3) write function to retrive data from DB 
4) Write function to display this data on the page (select div where data will be displayed)

*/

// const buttonW1 = document.querySelector("#WeekOne__Button");

// async function getAndDisplayWeekOneResources() {
//   const weekOneResources = await retrieveWeekOneResources();
//   displayWeekOneResources(weekOneResources);
// }

// async function retrieveWeekOneResources() {
//   //Send GET request to the resource library API. Await the response
//   const response = await fetch("http://localhost:3000/api/resources", {
//     headers: {
//       Accept: "application/json",
//     },
//   });
//   //Check if response failed, if so log an error and halt the app
//   if (!response.ok) {
//     console.error(`Status: ${response.status}`);
//     console.error(`Text: ${await response.text()}`);
//     return;
//   }
//   //return the parsed JSON from the response (which contains weather object)
//   const data = await response.json();
//   return data;
// }

// First attempt to display database response data using premade <p> tags
/*function displayWeekOneResources(weekOneResources) {
  // Show word
  const showWeekOneDate = document.getElementById("object__week__1");
  showWeekOneDate.innerText = weekOneResources.payload[0].week;
  const showWeekOneSubject = document.getElementById("object__subject__1");
  showWeekOneSubject.innerText = weekOneResources.payload[0].subject;
  const showWeekOneTitle = document.getElementById("object__title__1");
  showWeekOneTitle.innerText = weekOneResources.payload[0].title;
  const showWeekOneResource = document.getElementById("object__resource__1");
  showWeekOneResource.setAttribute(
    "href",
    weekOneResources.payload[0].resource
  );
}

buttonW1.addEventListener("click", getAndDisplayWeekOneResources);
*/

//------------------------------------------------------------- WEEK 1

const buttonW1 = document.querySelector("#WeekOne__Button");

async function getAndDisplayWeekOneResources() {
  const weekOneResources = await retrieveWeekOneResources();
  displayWeekOneResources(weekOneResources);
}

async function retrieveWeekOneResources() {
  //Send GET request to the resource library API. Await the response
  const response = await fetch("http://localhost:3000/api/resources/", {
    headers: {
      Accept: "application/json",
    },
  });
  //Check if response failed, if so log an error and halt the app
  if (!response.ok) {
    console.error(`Status: ${response.status}`);
    console.error(`Text: ${await response.text()}`);
    return;
  }
  //return the parsed JSON from the response (which contains weather object)
  const data = await response.json();
  return data;
}

function displayWeekOneResources(weekOneResources) {
  const containerDiv = document.getElementById("resource-container");
  for (let i = 0; i < weekOneResources.payload.length; i++) {

    newWeekP = document.createElement("p");
    newWeekP.innerText = weekOneResources.payload[i].week;
    containerDiv.appendChild(newWeekP);
    newSubjectP = document.createElement("p");
    newSubjectP.innerText = weekOneResources.payload[i].subject;
    containerDiv.appendChild(newSubjectP);
    newTitleP = document.createElement("p");
    newTitleP.innerText = weekOneResources.payload[i].title;
    containerDiv.appendChild(newTitleP);
    newAnchorElement = document.createElement("a");
    newAnchorElement.href = `${weekOneResources.payload[i].resource}`;
    newAnchorElement.textContent = "Link";
    containerDiv.appendChild(newAnchorElement);
  }
}

buttonW1.addEventListener("click", getAndDisplayWeekOneResources);

// FUNCTION WEEK ONE COMPLETED ABOVE =================================================





//------------------------------------------------------------- WEEK 2

const buttonW2 = document.querySelector("#WeekTwo__Button");

async function getAndDisplayWeekTwoResources() {
  const weekTwoResources = await retrieveWeekTwoResources();
  displayWeekTwoResources(weekTwoResources);
}

async function retrieveWeekTwoResources() {
  //Send GET request to the resource library API. Await the response
  const response = await fetch("http://localhost:3000/api/resources/week2", {
    headers: {
      Accept: "application/json",
    },
  });
  //Check if response failed, if so log an error and halt the app
  if (!response.ok) {
    console.error(`Status: ${response.status}`);
    console.error(`Text: ${await response.text()}`);
    return;
  }
  //return the parsed JSON from the response (which contains weather object)
  const data = await response.json();
  return data;
}

// function displayWeekTwoResources(weekTwoResources) {
//   // Show word
//   const showWeekTwoDate = document.getElementById("object__week__2");
//   showWeekTwoDate.innerText = weekTwoResources.payload[0].week;
//   const showWeekTwoSubject = document.getElementById("object__subject__2");
//   showWeekTwoSubject.innerText = weekTwoResources.payload[0].subject;
//   const showWeekTwoTitle = document.getElementById("object__title__2");
//   showWeekTwoTitle.innerText = weekTwoResources.payload[0].title;
//   const showWeekTwoResource = document.getElementById("object__resource__2");
//   showWeekTwoResource.setAttribute("href", weekTwoResources.payload[0].resource);
// }

// function loops through response data and populates the html with information
function displayWeekTwoResources(weekTwoResources) {
  const containerDiv = document.getElementById("resource-container");
  for (let i = 0; i < weekTwoResources.payload.length; i++) {

    /* Find  a way to clear the div before we repopulate*/
    
// Create a p tag where the data will be input. p is combined with inner text, from week column in database. resource-container is appended in html
    newWeekP = document.createElement("p");
    newWeekP.innerText = weekTwoResources.payload[i].week;
    containerDiv.appendChild(newWeekP);
    newSubjectP = document.createElement("p");
    newSubjectP.innerText = weekTwoResources.payload[i].subject;
    containerDiv.appendChild(newSubjectP);
    newTitleP = document.createElement("p");
    newTitleP.innerText = weekTwoResources.payload[i].title;
    containerDiv.appendChild(newTitleP);
    newAnchorElement = document.createElement("a");
    newAnchorElement.href = `${weekTwoResources.payload[i].resource}`;
    newAnchorElement.textContent = "Link";
    containerDiv.appendChild(newAnchorElement);
  }
}

buttonW2.addEventListener("click", getAndDisplayWeekTwoResources);

// document.addEventListener("DOMContentLoaded", getAndDisplayWeekOneResources);

const buttonW3 = document.querySelector("#WeekThree__Button");

async function getAndDisplayWeekThreeResources() {
  const weekThreeResources = await retrieveWeekThreeResources();
  displayWeekThreeResources(weekThreeResources);
}

async function retrieveWeekThreeResources() {
  //Send GET request to the resource library API. Await the response
  const response = await fetch("http://localhost:3000/api/resources/week3/", {
    headers: {
      Accept: "application/json",
    },
  });
  //Check if response failed, if so log an error and halt the app
  if (!response.ok) {
    console.error(`Status: ${response.status}`);
    console.error(`Text: ${await response.text()}`);
    return;
  }
  const data = await response.json();
  return data;
}

function displayWeekThreeResources(weekThreeResources) {
  const containerDiv = document.getElementById("resource-container");
  for (let i = 0; i < weekThreeResources.payload.length; i++) {

    newWeekP = document.createElement("p");
    newWeekP.innerText = weekThreeResources.payload[i].week;
    containerDiv.appendChild(newWeekP);
    newSubjectP = document.createElement("p");
    newSubjectP.innerText = weekThreeResources.payload[i].subject;
    containerDiv.appendChild(newSubjectP);
    newTitleP = document.createElement("p");
    newTitleP.innerText = weekThreeResources.payload[i].title;
    containerDiv.appendChild(newTitleP);
    newAnchorElement = document.createElement("a");
    newAnchorElement.href = `${weekThreeResources.payload[i].resource}`;
    newAnchorElement.textContent = "Link";
    containerDiv.appendChild(newAnchorElement);
  }
}

buttonW3.addEventListener("click", getAndDisplayWeekThreeResources);

// FUNCTION WEEK THREE COMPLETED ABOVE =================================================