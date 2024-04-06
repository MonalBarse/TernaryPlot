import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Details from "./components/Details";
import Collabration from "./components/Collabration";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.35rem] overflow-hidden">
        <Header />
        <Hero />
        <Details />
        <Collabration />
        <Services></Services>
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
