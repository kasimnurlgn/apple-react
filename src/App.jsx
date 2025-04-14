import "./App.css";
import Alert from "./components/Alert/Alert";
import FifthSection from "./components/FifthSection/FifthSection";
import FirstSection from "./components/FirstSection/FirstSection";
import Footer from "./components/Footer/Footer";
import FourthSection from "./components/FourthSection/FourthSection";
import Header from "./components/Header/Header";
import SecondSection from "./components/SecondSection/SecondSection";
import SixthSection from "./components/SixthSection/SixthSection";
import ThirdSection from "./components/ThirdSection/ThirdSection";

function App() {
  return (
    <>
      <Header />
      <Alert />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      {/* <SixthSection /> */}
      <Footer />
    </>
  );
}

export default App;
