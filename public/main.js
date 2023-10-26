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

// function to clear containerDiv
function clearWeekResources() {
  const containerDiv = document.getElementById("resource__container__week");
  containerDiv.innerHTML = ""; // Clear the contents of the container
}

function clearSubjectResources() {
  const containerDiv = document.getElementById("resource__container__subject");
  containerDiv.innerHTML = ""; // Clear the contents of the container
}

//------------------------------------------------------------- WEEK 1

const buttonW1 = document.querySelector("#WeekOne__Button");

async function getAndDisplayWeekOneResources() {
  const weekOneResources = await retrieveWeekOneResources();
  displayWeekOneResources(weekOneResources);
}

async function retrieveWeekOneResources() {
  //Send GET request to the resource library API. Await the response
  const response = await fetch("http://localhost:3000/api/resources", {
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
  clearWeekResources();
  const containerDiv = document.getElementById("resource__container__week");
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
    newAnchorElement.target = "_blank";
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
  clearWeekResources();
  const containerDiv = document.getElementById("resource__container__week");
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
    newAnchorElement.target = "_blank";
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
  const response = await fetch("http://localhost:3000/api/resources/week3", {
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
  clearWeekResources();
  const containerDiv = document.getElementById("resource__container__week");
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
    newAnchorElement.target = "_blank";
    newAnchorElement.textContent = "Link";
    containerDiv.appendChild(newAnchorElement);
  }
}

buttonW3.addEventListener("click", getAndDisplayWeekThreeResources);

// FUNCTION WEEK THREE COMPLETED ABOVE =================================================

const buttonW4 = document.querySelector("#WeekFour__Button");

async function getAndDisplayWeekFourResources() {
  const weekFourResources = await retrieveWeekFourResources();
  displayWeekFourResources(weekFourResources);
}

async function retrieveWeekFourResources() {
  //Send GET request to the resource library API. Await the response
  const response = await fetch("http://localhost:3000/api/resources/week4", {
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

function displayWeekFourResources(weekFourResources) {
  clearWeekResources();
  const containerDiv = document.getElementById("resource__container__week");
  for (let i = 0; i < weekFourResources.payload.length; i++) {
    newWeekP = document.createElement("p");
    newWeekP.innerText = weekFourResources.payload[i].week;
    containerDiv.appendChild(newWeekP);
    newSubjectP = document.createElement("p");
    newSubjectP.innerText = weekFourResources.payload[i].subject;
    containerDiv.appendChild(newSubjectP);
    newTitleP = document.createElement("p");
    newTitleP.innerText = weekFourResources.payload[i].title;
    containerDiv.appendChild(newTitleP);
    newAnchorElement = document.createElement("a");
    newAnchorElement.href = `${weekFourResources.payload[i].resource}`;
    newAnchorElement.target = "_blank";
    newAnchorElement.textContent = "Link";
    containerDiv.appendChild(newAnchorElement);
  }
}

buttonW4.addEventListener("click", getAndDisplayWeekFourResources);

// FUNCTION WEEK FOUR COMPLETED ABOVE =================================================

const buttonW5 = document.querySelector("#WeekFive__Button");

async function getAndDisplayWeekFiveResources() {
  const weekFiveResources = await retrieveWeekFiveResources();
  displayWeekFiveResources(weekFiveResources);
}

async function retrieveWeekFiveResources() {
  //Send GET request to the resource library API. Await the response
  const response = await fetch("http://localhost:3000/api/resources/week5", {
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

function displayWeekFiveResources(weekFiveResources) {
  clearWeekResources();
  const containerDiv = document.getElementById("resource__container__week");
  for (let i = 0; i < weekFiveResources.payload.length; i++) {
    newWeekP = document.createElement("p");
    newWeekP.innerText = weekFiveResources.payload[i].week;
    containerDiv.appendChild(newWeekP);
    newSubjectP = document.createElement("p");
    newSubjectP.innerText = weekFiveResources.payload[i].subject;
    containerDiv.appendChild(newSubjectP);
    newTitleP = document.createElement("p");
    newTitleP.innerText = weekFiveResources.payload[i].title;
    containerDiv.appendChild(newTitleP);
    newAnchorElement = document.createElement("a");
    newAnchorElement.href = `${weekFiveResources.payload[i].resource}`;
    newAnchorElement.target = "_blank";
    newAnchorElement.textContent = "Link";
    containerDiv.appendChild(newAnchorElement);
  }
}

buttonW5.addEventListener("click", getAndDisplayWeekFiveResources);

// FUNCTION WEEK FIVE COMPLETED ABOVE =================================================

const buttonW6 = document.querySelector("#WeekSix__Button");

async function getAndDisplayWeekSixResources() {
  const weekSixResources = await retrieveWeekSixResources();
  displayWeekSixResources(weekSixResources);
}

async function retrieveWeekSixResources() {
  //Send GET request to the resource library API. Await the response
  const response = await fetch("http://localhost:3000/api/resources/week6", {
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

function displayWeekSixResources(weekSixResources) {
  clearWeekResources();
  const containerDiv = document.getElementById("resource__container__week");
  for (let i = 0; i < weekSixResources.payload.length; i++) {
    newWeekP = document.createElement("p");
    newWeekP.innerText = weekSixResources.payload[i].week;
    containerDiv.appendChild(newWeekP);
    newSubjectP = document.createElement("p");
    newSubjectP.innerText = weekSixResources.payload[i].subject;
    containerDiv.appendChild(newSubjectP);
    newTitleP = document.createElement("p");
    newTitleP.innerText = weekSixResources.payload[i].title;
    containerDiv.appendChild(newTitleP);
    newAnchorElement = document.createElement("a");
    newAnchorElement.href = `${weekSixResources.payload[i].resource}`;
    newAnchorElement.target = "_blank";
    newAnchorElement.textContent = "Link";
    containerDiv.appendChild(newAnchorElement);
  }
}

buttonW6.addEventListener("click", getAndDisplayWeekSixResources);

// FUNCTION WEEK SIX COMPLETED ABOVE =================================================

const buttonW7 = document.querySelector("#WeekSeven__Button");

async function getAndDisplayWeekSevenResources() {
  const weekSevenResources = await retrieveWeekSevenResources();
  displayWeekSevenResources(weekSevenResources);
}

async function retrieveWeekSevenResources() {
  //Send GET request to the resource library API. Await the response
  const response = await fetch("http://localhost:3000/api/resources/week7", {
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

function displayWeekSevenResources(weekSevenResources) {
  clearWeekResources();
  const containerDiv = document.getElementById("resource__container__week");
  for (let i = 0; i < weekSevenResources.payload.length; i++) {
    newWeekP = document.createElement("p");
    newWeekP.innerText = weekSevenResources.payload[i].week;
    containerDiv.appendChild(newWeekP);
    newSubjectP = document.createElement("p");
    newSubjectP.innerText = weekSevenResources.payload[i].subject;
    containerDiv.appendChild(newSubjectP);
    newTitleP = document.createElement("p");
    newTitleP.innerText = weekSevenResources.payload[i].title;
    containerDiv.appendChild(newTitleP);
    newAnchorElement = document.createElement("a");
    newAnchorElement.href = `${weekSevenResources.payload[i].resource}`;
    newAnchorElement.target = "_blank";
    newAnchorElement.textContent = "Link";
    containerDiv.appendChild(newAnchorElement);
  }
}

buttonW7.addEventListener("click", getAndDisplayWeekSevenResources);

// FUNCTION WEEK SEVEN COMPLETED ABOVE =================================================

const buttonW8 = document.querySelector("#WeekEight__Button");

async function getAndDisplayWeekEightResources() {
  const weekEightResources = await retrieveWeekEightResources();
  displayWeekEightResources(weekEightResources);
}

async function retrieveWeekEightResources() {
  //Send GET request to the resource library API. Await the response
  const response = await fetch("http://localhost:3000/api/resources/week8", {
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

function displayWeekEightResources(weekEightResources) {
  clearWeekResources();
  const containerDiv = document.getElementById("resource__container__week");
  for (let i = 0; i < weekEightResources.payload.length; i++) {
    newWeekP = document.createElement("p");
    newWeekP.innerText = weekEightResources.payload[i].week;
    containerDiv.appendChild(newWeekP);
    newSubjectP = document.createElement("p");
    newSubjectP.innerText = weekEightResources.payload[i].subject;
    containerDiv.appendChild(newSubjectP);
    newTitleP = document.createElement("p");
    newTitleP.innerText = weekEightResources.payload[i].title;
    containerDiv.appendChild(newTitleP);
    newAnchorElement = document.createElement("a");
    newAnchorElement.href = `${weekEightResources.payload[i].resource}`;
    newAnchorElement.target = "_blank";
    newAnchorElement.textContent = "Link";
    containerDiv.appendChild(newAnchorElement);
  }
}

buttonW8.addEventListener("click", getAndDisplayWeekEightResources);

/// DISPLAY BY SUBJECT

const buttonCSS = document.querySelector("#CSS__button");

async function getAndDisplayCSSResources() {
  const CSSResources = await retrieveCSSResources();
  displayCSSResources(CSSResources);
}

async function retrieveCSSResources() {
  //Send GET request to the resource library API. Await the response
  const response = await fetch("http://localhost:3000/api/resources/CSS", {
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

function displayCSSResources(CSSResources) {
  clearSubjectResources();
  const containerDiv = document.getElementById("resource__container__subject");
  for (let i = 0; i < CSSResources.payload.length; i++) {
    newWeekP = document.createElement("p");
    newWeekP.innerText = CSSResources.payload[i].week;
    containerDiv.appendChild(newWeekP);
    newSubjectP = document.createElement("p");
    newSubjectP.innerText = CSSResources.payload[i].subject;
    containerDiv.appendChild(newSubjectP);
    newTitleP = document.createElement("p");
    newTitleP.innerText = CSSResources.payload[i].title;
    containerDiv.appendChild(newTitleP);
    newAnchorElement = document.createElement("a");
    newAnchorElement.href = `${CSSResources.payload[i].resource}`;
    newAnchorElement.target = "_blank";
    newAnchorElement.textContent = "Link";
    containerDiv.appendChild(newAnchorElement);
  }
}

buttonCSS.addEventListener("click", getAndDisplayCSSResources);

// FUNCTION CSS COMPLETED ABOVE =================================================

const buttonHTML = document.querySelector("#HTML__button");

async function getAndDisplayHTMLResources() {
  const HTMLResources = await retrieveHTMLResources();
  displayHTMLResources(HTMLResources);
}

async function retrieveHTMLResources() {
  //Send GET request to the resource library API. Await the response
  const response = await fetch("http://localhost:3000/api/resources/HTML", {
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

function displayHTMLResources(HTMLResources) {
  clearSubjectResources();
  const containerDiv = document.getElementById("resource__container__subject");
  for (let i = 0; i < HTMLResources.payload.length; i++) {
    newWeekP = document.createElement("p");
    newWeekP.innerText = HTMLResources.payload[i].week;
    containerDiv.appendChild(newWeekP);
    newSubjectP = document.createElement("p");
    newSubjectP.innerText = HTMLResources.payload[i].subject;
    containerDiv.appendChild(newSubjectP);
    newTitleP = document.createElement("p");
    newTitleP.innerText = HTMLResources.payload[i].title;
    containerDiv.appendChild(newTitleP);
    newAnchorElement = document.createElement("a");
    newAnchorElement.href = `${HTMLResources.payload[i].resource}`;
    newAnchorElement.target = "_blank";
    newAnchorElement.textContent = "Link";
    containerDiv.appendChild(newAnchorElement);
  }
}

buttonHTML.addEventListener("click", getAndDisplayHTMLResources);

// FUNCTION HTML COMPLETED ABOVE =================================================

const buttonJS = document.querySelector("#Javascript__button");

async function getAndDisplayJavascriptResources() {
  const JavascriptResources = await retrieveJavascriptResources();
  displayJavascriptResources(JavascriptResources);
}

async function retrieveJavascriptResources() {
  //Send GET request to the resource library API. Await the response
  const response = await fetch(
    "http://localhost:3000/api/resources/Javascript",
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
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

function displayJavascriptResources(JavascriptResources) {
  clearSubjectResources();
  const containerDiv = document.getElementById("resource__container__subject");
  for (let i = 0; i < JavascriptResources.payload.length; i++) {
    newWeekP = document.createElement("p");
    newWeekP.innerText = JavascriptResources.payload[i].week;
    containerDiv.appendChild(newWeekP);
    newSubjectP = document.createElement("p");
    newSubjectP.innerText = JavascriptResources.payload[i].subject;
    containerDiv.appendChild(newSubjectP);
    newTitleP = document.createElement("p");
    newTitleP.innerText = JavascriptResources.payload[i].title;
    containerDiv.appendChild(newTitleP);
    newAnchorElement = document.createElement("a");
    newAnchorElement.href = `${JavascriptResources.payload[i].resource}`;
    newAnchorElement.target = "_blank";
    newAnchorElement.textContent = "Link";
    containerDiv.appendChild(newAnchorElement);
  }
}

buttonJS.addEventListener("click", getAndDisplayJavascriptResources);

// FUNCTION JS COMPLETED ABOVE =================================================

const buttonMindset = document.querySelector("#Mindset__button");

async function getAndDisplayMindsetResources() {
  const MindsetResources = await retrieveMindsetResources();
  displayMindsetResources(MindsetResources);
}

async function retrieveMindsetResources() {
  //Send GET request to the resource library API. Await the response
  const response = await fetch("http://localhost:3000/api/resources/Mindset", {
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

function displayMindsetResources(MindsetResources) {
  clearSubjectResources();
  const containerDiv = document.getElementById("resource__container__subject");
  for (let i = 0; i < MindsetResources.payload.length; i++) {
    newWeekP = document.createElement("p");
    newWeekP.innerText = MindsetResources.payload[i].week;
    containerDiv.appendChild(newWeekP);
    newSubjectP = document.createElement("p");
    newSubjectP.innerText = MindsetResources.payload[i].subject;
    containerDiv.appendChild(newSubjectP);
    newTitleP = document.createElement("p");
    newTitleP.innerText = MindsetResources.payload[i].title;
    containerDiv.appendChild(newTitleP);
    newAnchorElement = document.createElement("a");
    newAnchorElement.href = `${MindsetResources.payload[i].resource}`;
    newAnchorElement.target = "_blank";
    newAnchorElement.textContent = "Link";
    containerDiv.appendChild(newAnchorElement);
  }
}

buttonMindset.addEventListener("click", getAndDisplayMindsetResources);

// FUNCTION Mindset COMPLETED ABOVE =================================================

const buttonNode = document.querySelector("#Node__button");

async function getAndDisplayNodeResources() {
  const NodeResources = await retrieveNodeResources();
  displayNodeResources(NodeResources);
}

async function retrieveNodeResources() {
  //Send GET request to the resource library API. Await the response
  const response = await fetch("http://localhost:3000/api/resources/Node", {
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

function displayNodeResources(NodeResources) {
  clearSubjectResources();
  const containerDiv = document.getElementById("resource__container__subject");
  for (let i = 0; i < NodeResources.payload.length; i++) {
    newWeekP = document.createElement("p");
    newWeekP.innerText = NodeResources.payload[i].week;
    containerDiv.appendChild(newWeekP);
    newSubjectP = document.createElement("p");
    newSubjectP.innerText = NodeResources.payload[i].subject;
    containerDiv.appendChild(newSubjectP);
    newTitleP = document.createElement("p");
    newTitleP.innerText = NodeResources.payload[i].title;
    containerDiv.appendChild(newTitleP);
    newAnchorElement = document.createElement("a");
    newAnchorElement.href = `${NodeResources.payload[i].resource}`;
    newAnchorElement.target = "_blank";
    newAnchorElement.textContent = "Link";
    containerDiv.appendChild(newAnchorElement);
  }
}

buttonNode.addEventListener("click", getAndDisplayNodeResources);
