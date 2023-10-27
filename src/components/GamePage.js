function GamePage() {
  return (
    <div className="game-page-container">
      <h1>Game</h1>
      <button>Click For Sound</button>
      <div className="boxes-container">
        <input />
        <input />
        <input />
        <input />
        <input />
        <button className="submit-word-btn">Submit</button>
      </div>
      <div className="counter">Counter: 0</div>
    </div>
  );
}

export default GamePage;
