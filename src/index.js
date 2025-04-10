import "./styles.css";
import { loadHomePage } from "./load-homepage.js";
import { loadMenu } from "./load-menu.js";


const home = document.querySelector(".home");
const about = document.querySelector(".menu");
const contact = document.querySelector(".contact");
const content = document.querySelector("#content");

home.addEventListener("click", () => {
    content.innerHTML = "";
    loadHomePage();
})

about.addEventListener("click", () => {
    content.innerHTML = "";
    loadMenu();
})
