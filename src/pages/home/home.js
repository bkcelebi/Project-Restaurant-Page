import "./home.css";

const home = () => {
  const container = document.querySelector("#content");

  const wrapper = document.createElement("div");
  const hero = document.createElement("div");
  const heading = document.createElement("p");
  const greeting = document.createElement("p");

  container.appendChild(wrapper);
  wrapper.appendChild(hero);
  hero.appendChild(heading);
  hero.appendChild(greeting);

  heading.innerText = "Are you looking for an authentic Pizza Restaurant?";
  greeting.innerText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  hero.classList.add("hero");
  heading.classList.add("heading");
  wrapper.classList.add("wrapper");
};

export default home;
