import "./App.css";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Socials from "./components/Socials";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Info />
        <About />
        <Interests />
        <Socials />
      </div>
    </div>
  );
}

export default App;
