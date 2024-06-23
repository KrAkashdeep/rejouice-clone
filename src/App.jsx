import "./App.css";
import Explore from "./components/Explore/Explore";
import MainPage from "./components/MainPage/MainPage";
import Service from "./components/Service/Service";
import Work from "./components/Work/Work";
import WorkText from "./components/WorkText/WorkText";

function App() {
  return (
    <>
      <MainPage />
      <Service />
      <Explore />
      <Work />
      <WorkText />
    </>
  );
}

export default App;
