import "./GameCard.css";

export default function GameCard({ game }) {
  const { name, abbrev, is_active } = game;

  console.log(is_active);

  const statsURL = `/games/${abbrev}/stats`;
  const settingsURL = `/games/${abbrev}/settings`;

  return (
    <div className="Card-container">
      <h3>{name}</h3>
      <p>Status: {is_active ? "Active" : "Inactive"}</p>

      <div className="Link-container">
        <a href={statsURL}>Stats</a>
        <a href={settingsURL}>Settings</a>
      </div>
    </div>
  );
}
