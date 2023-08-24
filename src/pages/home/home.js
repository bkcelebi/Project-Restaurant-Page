import "./home.css";
import heroImg from "../../assets/header.jpg";

const home = () => {
  const container = document.querySelector("#content");

  const hero = document.createElement("div");
  const img = document.createElement("img");
  const textContainer = document.createElement("div");
  const heading = document.createElement("h1");
  const greeting = document.createElement("p");

  container.appendChild(hero);
  hero.appendChild(img);
  hero.appendChild(textContainer);
  textContainer.appendChild(heading);
  textContainer.appendChild(greeting);

  heading.innerText = "Welcome!";
  greeting.innerText =
    "Are you looking for a nice ski Resorts? \n You no longer need to!";
  hero.classList.add("hero");
  img.src = heroImg;
};

export default home;
