import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="/" className="App-h1">
          Gamers Grouping
        </a>
        <Nav />
      </header>
      <Outlet />
    </div>
  );
}

export default App;
