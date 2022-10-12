import { useState } from "react";

export default function NewTable() {
  const [maxPlayers, setMaxPlayers] = useState(0);
  const [bigBlind, setBigBlind] = useState(0);
  const [playerChips, setPlayerChips] = useState(0);

  function setForm() {}

  const onSelect = (e) => {
    setMaxPlayers(e.target.value);
    console.log(maxPlayers);
  };

  return (
    <div className="createNewTable">
      <h2>Create new table</h2>
      <form>
        <span>Max players: </span>
        <select onSelect={onSelect}>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
        </select>
        <br />
        <span>Big Blind: </span>
        <select onSelect={onSelect}>
          <option value={10}>10</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
          <option value={250}>250</option>
          <option value={500}>500</option>
          <option value={1000}>1000</option>
          <option value={1500}>1500</option>
          <option value={3000}>3000</option>
          <option value={10000}>10000</option>
        </select>
        <br />
        <span>In game chips: </span>
        <input
          onChange={(e) => setPlayerChips(e.target.value)}
          type={"text"}
        ></input>
      </form>
      <br />
      <button onClick={() => setForm()}>Create</button>
    </div>
  );
}
