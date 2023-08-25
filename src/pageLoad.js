import header from "./components/header/header";
import footer from "./components/footer/footer";
import home from "./pages/home/home";
import menu from "./pages/menu/menu";
import contact from "./pages/contact/contact";

const pageLoad = () => {
  header();
  home();
  // menu();
  // contact();
  footer();
};

export default pageLoad;
