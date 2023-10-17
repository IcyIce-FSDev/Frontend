import Discord from "../Logins/Discord";
import Twitch from "../Logins/Twitch";
import { useSelector } from "react-redux";

import "./Nav.css";

function Nav() {
  const auth = useSelector((state) => state.auth.isAuth);

  if (!auth) {
    return (
      <nav className="App-nav-unauth">
        <p>Signin:</p>
        <Discord />
        <p>/</p>
        <Twitch />
      </nav>
    );
  } else {
    return (
      <nav className="App-nav-auth">
        <a href="/games">Games</a>
        <p>Find Match</p>
        <p>Matches</p>
        <p>Bots</p>
        <p>Profile</p>
        <a href="/logout">Logout</a>
      </nav>
    );
  }
}

export default Nav;
