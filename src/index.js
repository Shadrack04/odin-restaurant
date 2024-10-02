import "./styles/style.css";
import { renderHome } from "./home.js";
import { renderMenu } from "./menu.js";
import { renderAbout } from "./about.js";


renderHome();
const buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    const arrayOption = [renderHome, renderMenu, renderAbout];
    const callFun = arrayOption[index];
    callFun();
    
  })
})