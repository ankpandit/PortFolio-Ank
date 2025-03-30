import Navbar from "./components/Navbar/Navbar";
import './App.css' ;
import Intro from "./components/Intro/Intro";
import NavTo from "./components/Navto/NavTo";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import WorkOverlay from "./components/WorkOverlay/WorkOverlay";

function App() {
  

  return (
    <div className="App">
        <Navbar></Navbar>
        <Intro></Intro>
        <NavTo ></NavTo>
        <Services></Services>
        <Experience></Experience>
        {/* <Work></Work> */}
        <Portfolio></Portfolio>
        <Contact ></Contact>
        <WorkOverlay></WorkOverlay>
    </div>
  );
}

export default App;
