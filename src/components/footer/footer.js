import "./footer.css";
import FooterLogo from "../../assets/footerLogo.png";
import Github from "../../assets/github.svg";

const footer = () => {
  const container = document.querySelector("#content");

  const footer = document.createElement("footer");
  const copyright = document.createElement("p");
  const footerLogo = document.createElement("a");
  const logo = document.createElement("img");
  const github = document.createElement("img");

  container.appendChild(footer);

  footer.appendChild(copyright);
  footer.appendChild(footerLogo);

  const time = new Date().getFullYear();
  copyright.innerText = `Copyright © ${time}`;

  github.src = Github;
  logo.src = FooterLogo;
  footerLogo.appendChild(logo);
  footerLogo.appendChild(github);

  footerLogo.href = "https://github.com/bkcelebi";
  footerLogo.target = "_blank";

  github.classList.add("github");
};

export default footer;
