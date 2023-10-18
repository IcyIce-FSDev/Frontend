import QuickGames from "../../../components/QuickGames/QuickGames";
import "./Auth.css";
import { useSelector } from "react-redux";

function Auth() {
  const user = useSelector((state) => state.auth.user);

  return (
    <main className="Landing-container parent">
      <div className="div1 opts">
        <p>Welcome Back, {user}</p>
        <div className="settings">
          <a href="/profile/settings" className="links">
            Settings
          </a>
          <a href="/profile/matchpref" className="links">
            Match Preferences
          </a>
        </div>
      </div>

      <QuickGames />

      <div className="div3 opts">
        <p>Quick List of Bots user has active</p>
      </div>

      <div className="div4 opts">
        <p>Box of New Matches</p>
      </div>

      <div className="div5 opts">
        <p>Box of Existing Matches</p>
      </div>
    </main>
  );
}

export default Auth;
