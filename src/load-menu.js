import backgroundImage from "./images/background-image.png";
import neapolitanPizza from "./images/neapolitan-pizza.jpg";
import marghertiaPizza from "./images/pizza-margherita.jpg";
import marinaraPizza from "./images/marinara-pizza.jpg";

function loadMenu() {
    const body = document.querySelector("body");
    body.classList = "";
    body.classList.add("body-otherpage");

    const content = document.querySelector("#content");

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    const firstPizzaDiv = document.createElement("div");
    firstPizzaDiv.classList.add("pizza-container");
    const firstPizzaImage = document.createElement("img");
    firstPizzaImage.src = neapolitanPizza;
    firstPizzaImage.alt = "An image of neapolitan pizza";
    const firstPizzaInfo = document.createElement("p");
    firstPizzaInfo.innerText = "Neapolitan Pizza\n$8";
    firstPizzaDiv.appendChild(firstPizzaImage);
    firstPizzaDiv.appendChild(firstPizzaInfo);

    const secondPizzaDiv = document.createElement("div");
    secondPizzaDiv.classList.add("pizza-container");
    const secondPizzaImage = document.createElement("img");
    secondPizzaImage.src = marghertiaPizza;
    secondPizzaImage.alt = "An image of marghertia pizza";
    const secondPizzaInfo = document.createElement("p");
    secondPizzaInfo.innerText = "Margherita Pizza\n$10";
    secondPizzaDiv.appendChild(secondPizzaImage);
    secondPizzaDiv.appendChild(secondPizzaInfo);

    const thirdPizzaDiv = document.createElement("div");
    thirdPizzaDiv.classList.add("pizza-container");
    const thirdPizzaImage = document.createElement("img");
    thirdPizzaImage.src = marinaraPizza;
    thirdPizzaImage.alt = "An image of marinara pizza";
    const thirdPizzaInfo = document.createElement("p");
    thirdPizzaInfo.innerText = "Marinara Pizza\n$12";
    thirdPizzaDiv.appendChild(thirdPizzaImage);
    thirdPizzaDiv.appendChild(thirdPizzaInfo);

    menuContainer.appendChild(firstPizzaDiv);
    menuContainer.appendChild(secondPizzaDiv);
    menuContainer.appendChild(thirdPizzaDiv);

    content.appendChild(menuContainer);




}



export { loadMenu };