import "./contact.css";
import Map from "../../assets/contact.png";

const contact = () => {
  const container = document.querySelector("#content");

  const contactContainer = document.createElement("div");
  const contact = document.createElement("div");
  const contactInfo = document.createElement("div");
  const map = document.createElement("img");
  const tel = document.createElement("p");
  const address = document.createElement("p");

  container.appendChild(contactContainer);
  contactContainer.appendChild(contact);
  contact.appendChild(contactInfo);
  contact.appendChild(map);
  contactInfo.appendChild(tel);
  contactInfo.appendChild(address);

  contact.classList.add("contact");
  contactInfo.classList.add("contactInfo");
  contactContainer.classList.add("contactContainer");
  map.classList.add("map");

  map.src = Map;
  tel.innerText = "Phone: 0123456789";
  address.innerText = "Address: ABC Road, DCE. Dublin";
};

export default contact;
