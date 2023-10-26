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
  if (!response.ok) {
    console.error(`Status: ${response.status}`);
    console.error(`Text: ${await response.text()}`);
    return;
  }
  //return the parsed JSON from the response (which contains weather object)
  const data = await response.json();
  return data;
}
