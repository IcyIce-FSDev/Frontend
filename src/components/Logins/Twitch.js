function Twitch() {
  return (
    <p style={styles} onClick={login}>
      Twitch
    </p>
  );
}

const styles = {
  cursor: "pointer",
};

const login = (e) => {
  e.preventDefault();

  console.log("Clicked Twitch Login");
};

export default Twitch;
