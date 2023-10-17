import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Gamers Grouping</h2>
        <Nav />
      </header>
      <Outlet />
    </div>
  );
}

export default App;
