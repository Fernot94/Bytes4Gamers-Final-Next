import { useState } from "react";

export default function Dummy() {
  const [jogadores, setJogadores] = useState([]);
  const [deck, setDeck] = useState([]);

  const shuffle = () => {};
  const deal = () => {};

  const adicionaJogador = () => {
    setJogadores((prev) => [...prev, prev.length + 1]);
  };

  return (
    <div className="main">
      <div className="table">
        {jogadores.map((player, i) => (
          <div key={i}>
            {player.value === undefined
              ? ""
              : "${player.value}, ${player.suit}"}
          </div>
        ))}
      </div>

      <button onClick={() => adicionaJogador()}>Adiciona Jogador</button>
    </div>
  );
}
