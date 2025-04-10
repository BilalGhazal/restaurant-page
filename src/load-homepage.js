import backgroundImage from "./images/pizza.jpg";

function loadHomePage() {
    const body = document.querySelector("body");
    body.classList = "";
    body.classList.add("body-homepage");

    const mainContainer = document.querySelector("#content");

    const subcontainer = document.createElement("div");
    subcontainer.classList.add("subcontainer");

    const mainHeader = document.createElement("p");
    mainHeader.textContent = "THE BEST PIZZA IN TOWN!";
    mainHeader.classList.add("main-header");


    const hoursDiv = document.createElement("div");
    hoursDiv.classList.add("hours");
    const hoursHeader = document.createElement("p");
    hoursHeader.textContent = "Hours:";
    const hoursParagarph = document.createElement("p");
    hoursParagarph.innerText = "Sunday: 8am - 8pm\nMonday: 6am - 6pm\nTuesday: 6am - 6pm\nWednesday: 6am - 6pm\nThursday: 6am - 10pm\nFriday: 6am - 10pm\nSaturday: 8am - 10pm"
    hoursDiv.appendChild(hoursHeader);
    hoursDiv.appendChild(hoursParagarph);


    const locationDiv = document.createElement("div");
    locationDiv.classList.add("location");
    const locationHeader = document.createElement("p");
    locationHeader.textContent = "Location:";
    const locationParagraph = document.createElement("p");
    locationParagraph.textContent = "123 Forest Drive, Forestville, Maine";
    locationDiv.appendChild(locationHeader);
    locationDiv.appendChild(locationParagraph);

    const locationAndHoursDiv = document.createElement("div");
    locationAndHoursDiv.classList.add("locationAndHours");
    locationAndHoursDiv.appendChild(hoursDiv);
    locationAndHoursDiv.appendChild(locationDiv);


    subcontainer.appendChild(mainHeader);
    subcontainer.appendChild(locationAndHoursDiv);
    


    mainContainer.appendChild(subcontainer);


}

export { loadHomePage };