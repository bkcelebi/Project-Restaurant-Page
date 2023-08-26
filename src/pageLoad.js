import header from "./components/header/header";
import footer from "./components/footer/footer";
import home from "./pages/home/home";

const pageLoad = () => {
  header();
  home();
  footer();
};

export default pageLoad;
