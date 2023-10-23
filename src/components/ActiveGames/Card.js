import "./Card.css";

export default function Card({ game }) {
  return (
    <div className="gameCards">
      <p>{game.name}</p>
      <p>Status: {game.is_active ? "Active" : "Inactive"}</p>
      <div className="Links-cont">
        <a href={`/games/${game.abbrev}/stats`} className="links">
          Stats
        </a>

        <a href={`/games/${game.abbrev}/settings`} className="links">
          Settings
        </a>
      </div>
    </div>
  );
}
