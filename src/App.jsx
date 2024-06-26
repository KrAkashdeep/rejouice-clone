import { useRef } from "react";
import "./App.css";
import About from "./components/About/About";
import Explore from "./components/Explore/Explore";
import Footer from "./components/Footer/Footer";
import MainPage from "./components/MainPage/MainPage";
import Seats from "./components/Seats/Seats";
import Service from "./components/Service/Service";
import Strategy from "./components/Strategy/Strategy";
import Work from "./components/Work/Work";
import WorkText from "./components/WorkText/WorkText";
import Contacts from "./components/contacts/Contacts";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
function App() {
  const containerRef = useRef(null);
  return (
    <>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
        }}
      >
        <main data-scroll-container ref={containerRef}>
          <MainPage />
          <Service />
          <Explore />
          <Work />
          <WorkText />
          <Seats />
          <Strategy />
          <Contacts />
          <About />
          <Footer />
        </main>
      </LocomotiveScrollProvider>
    </>
  );
}

export default App;
