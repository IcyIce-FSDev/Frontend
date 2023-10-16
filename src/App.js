import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import { Provider } from "react-redux";
import store from "./lib/store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h2>Gamers Grouping</h2>
          <Nav />
        </header>
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;
