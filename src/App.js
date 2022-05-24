import Home from "./Component";
import About from "./Component/About";
import './App.css';
import Menu from "./Component/Menu";
import Contact from "./Component/Contact";
import NavBar from "./Component/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <br></br>
      <br></br>
      <Menu />
      <br></br>
      <br></br>
      <About />
      <br></br>
      <br></br>
      <Contact />
    </div>
  );
}

export default App;
