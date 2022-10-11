import { useState } from 'react'

export default function NewTable() {

    const [maxPlayers, setMaxPlayers] = useState(0)
    const [bigBlind, setBigBlind] = useState(0)
    const [playerChips, setPlayerChips] = useState(0)

    function setForm() {
    }

    return (
        <div className="createNewTable">
            <h2>Create new table</h2>
            <form>
                <span>Max players: </span>
                <select>
                    <option value={setMaxPlayers(2)}>2</option>
                    <option value={setMaxPlayers(3)}>3</option>
                    <option value={setMaxPlayers(4)}>4</option>
                    <option value={setMaxPlayers(5)}>5</option>
                    <option value={setMaxPlayers(6)}>6</option>
                    <option value={setMaxPlayers(7)}>7</option>
                    <option value={setMaxPlayers(8)}>8</option>
                    <option value={setMaxPlayers(9)}>9</option>
                </select>
                <br />
                <span>Big Blind: </span>
                <select>
                    <option value={setBigBlind(10)}>10</option>
                    <option value={setBigBlind(50)}>50</option>
                    <option value={setBigBlind(100)}>100</option>
                    <option value={setBigBlind(250)}>250</option>
                    <option value={setBigBlind(500)}>500</option>
                    <option value={setBigBlind(1000)}>1000</option>
                    <option value={setBigBlind(1500)}>1500</option>
                    <option value={setBigBlind(3000)}>3000</option>
                    <option value={setBigBlind(10000)}>10000</option>
                </select>
                <br />
                <span>In game chips: </span>
                <input onChange={(e) => setPlayerChips(e.target.value)} type={"text"}></input>
            </form>
            <br />
            <button onClick={() => setForm()}>Create</button>
        </div>
    );
}