<form>
  {games.map((currentGame) => (
    <label key={currentGame}>
      <input
        type="radio"
        onChange={onGameChange}
        value={currentGame}
        checked={game === currentGame}
      ></input>
      {currentGame}
    </label>
  ))}
</form>;
