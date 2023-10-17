import "./Auth.css";

function Auth() {
  return (
    <main className="Landing-container parent">
      <div className="div1 opts user">
        <p>Welcome Back, Username</p>
        <ul>
          <li>Settings</li>
          <li>Match Preferences</li>
        </ul>
      </div>

      <div className="div2 opts">
        <p>
          Quick List of Games user has tracking, just icons, available options
          would be OW, Fortnite, OSRS
        </p>
      </div>

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
