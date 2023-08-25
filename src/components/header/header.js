import "./header.css";

const header = () => {
  const container = document.querySelector("#content");

  const header = document.createElement("div");
  const logo = document.createElement("p");
  const nav = document.createElement("nav");
  const homeLink = document.createElement("a");
  const menuLink = document.createElement("a");
  const contactLink = document.createElement("a");

  container.appendChild(header);
  header.appendChild(logo);

  header.classList.add("header");
  logo.innerText = "Restaurant";
  logo.classList.add("logo");

  header.appendChild(nav);
  nav.appendChild(homeLink);
  nav.appendChild(menuLink);
  nav.appendChild(contactLink);

  homeLink.textContent = "Home";
  menuLink.textContent = "Menu";
  contactLink.textContent = "Contact";
};

export default header;
