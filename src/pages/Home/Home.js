import { useSelector } from "react-redux";

import "./Home.css";

function Home() {
  const user = useSelector((state) => state.auth.user);

  return (
    <main className="Home-container">
      <p>User: {user}</p>
      <p>Authorized Home Page</p>
    </main>
  );
}

export default Home;
