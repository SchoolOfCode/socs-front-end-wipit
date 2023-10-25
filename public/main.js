// This file contains any logic that needs to run once when the page loads.

// import { getWeekResources } from "../../BACK/resources/resources.controller";

/* 
1) Select button from index.html file
2) Add EventListener(Click) to this button
3) write function to retrive data from DB 
4) Write function to display this data on the page (select div where data will be displayed)

*/

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
  // Show word
  const showWeekOneDate = document.getElementById("object__week__1");
  showWeekOneDate.innerText = weekOneResources.payload[0].week;
}

buttonW1.addEventListener("click", getAndDisplayWeekOneResources);

// document.addEventListener("DOMContentLoaded", getAndDisplayWeekOneResources);
