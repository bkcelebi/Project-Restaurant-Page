import "./menu.css";
import Pizza from "../../assets/pizza.jpg";

const createMenu = () => {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(
    createMenuItem(
      "Pepperoni Pizza",
      "Tomato Sauce, Pepperoni, Mozzarella",
      9.95,
      Pizza
    )
  );
  menu.appendChild(
    createMenuItem(
      "Pepperoni Pizza",
      "Tomato Sauce, Pepperoni, Mozzarella",
      9.95,
      Pizza
    )
  );
  menu.appendChild(
    createMenuItem(
      "Pepperoni Pizza",
      "Tomato Sauce, Pepperoni, Mozzarella",
      9.95,
      Pizza
    )
  );
  menu.appendChild(
    createMenuItem(
      "Pepperoni Pizza",
      "Tomato Sauce, Pepperoni, Mozzarella",
      9.95,
      Pizza
    )
  );
  menu.appendChild(
    createMenuItem(
      "Pepperoni Pizza",
      "Tomato Sauce, Pepperoni, Mozzarella",
      9.95,
      Pizza
    )
  );
  menu.appendChild(
    createMenuItem(
      "Pepperoni Pizza",
      "Tomato Sauce, Pepperoni, Mozzarella",
      9.95,
      Pizza
    )
  );
  menu.appendChild(
    createMenuItem(
      "Pepperoni Pizza",
      "Tomato Sauce, Pepperoni, Mozzarella",
      9.95,
      Pizza
    )
  );
  menu.appendChild(
    createMenuItem(
      "Pepperoni Pizza",
      "Tomato Sauce, Pepperoni, Mozzarella",
      9.95,
      Pizza
    )
  );
  menu.appendChild(
    createMenuItem(
      "Pepperoni Pizza",
      "Tomato Sauce, Pepperoni, Mozzarella",
      9.95,
      Pizza
    )
  );
  menu.appendChild(
    createMenuItem(
      "Pepperoni Pizza",
      "Tomato Sauce, Pepperoni, Mozzarella",
      9.95,
      Pizza
    )
  );
  menu.appendChild(
    createMenuItem(
      "Pepperoni Pizza",
      "Tomato Sauce, Pepperoni, Mozzarella",
      9.95,
      Pizza
    )
  );
  menu.appendChild(
    createMenuItem(
      "Pepperoni Pizza",
      "Tomato Sauce, Pepperoni, Mozzarella",
      9.95,
      Pizza
    )
  );
  menu.appendChild(
    createMenuItem(
      "Pepperoni Pizza",
      "Tomato Sauce, Pepperoni, Mozzarella",
      9.95,
      Pizza
    )
  );

  return menu;
};

const createMenuItem = (title, desc, price, img) => {
  const itemWrapper = document.createElement("div");
  const infoWrapper = document.createElement("div");
  const itemImg = document.createElement("img");
  const itemTitle = document.createElement("p");
  const itemDesc = document.createElement("p");
  const itemPrice = document.createElement("p");

  itemWrapper.appendChild(infoWrapper);
  itemWrapper.appendChild(itemImg);
  infoWrapper.appendChild(itemTitle);
  infoWrapper.appendChild(itemDesc);
  infoWrapper.appendChild(itemPrice);

  itemWrapper.classList.add("itemWrapper");
  infoWrapper.classList.add("infoWrapper");
  itemImg.classList.add("itemImg");
  itemTitle.classList.add("itemTitle");
  itemDesc.classList.add("itemDesc");
  itemPrice.classList.add("itemPrice");

  itemTitle.innerText = title;
  itemDesc.innerText = desc;
  itemPrice.innerText = `$${price}`;
  itemImg.src = img;

  return itemWrapper;
};

const menu = () => {
  const container = document.querySelector("#content");
  const wrapper = document.createElement("div");
  const pizzaWrapper = document.createElement("div");

  wrapper.classList.add("wrapper");
  pizzaWrapper.classList.add("pizzaWrapper");

  container.appendChild(wrapper);
  wrapper.appendChild(pizzaWrapper);
  pizzaWrapper.appendChild(createMenu());
};

export default menu;
