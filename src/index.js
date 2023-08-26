import "./main.css";
import pageLoad from "./pageLoad";
import footer from "./components/footer/footer";
import home from "./pages/home/home";
import menu from "./pages/menu/menu";
import contact from "./pages/contact/contact";

pageLoad();

const clearPage = () => {
  const container = document.querySelector("#content");
  const wrapper = document.querySelector(".wrapper");
  const footer = document.querySelector("footer");

  if (wrapper) {
    container.removeChild(wrapper);
    container.removeChild(footer);
  }
};

const homeLink = document.querySelector(".homeLink");
const menuLink = document.querySelector(".menuLink");
const contactLink = document.querySelector(".contactLink");

homeLink.addEventListener("click", () => {
  clearPage();
  home();
  footer();
});

menuLink.addEventListener("click", () => {
  clearPage();
  menu();
  footer();
});

contactLink.addEventListener("click", () => {
  clearPage();
  contact();
  footer();
});
