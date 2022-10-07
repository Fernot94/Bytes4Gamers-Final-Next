import { useState } from "react";

export default function Dummy() {
  const [numero, setNumero] = useState(0);
  const [jogadores, setJogadores] = useState([]);

  const adicionaJogador = () => {
    setJogadores((prev) => [...prev, prev.length + 1]);
  };

  return (
    <div className="main">
      <div className="table">
        {jogadores.map((player, i) => (
          <div key={i}>{player}</div>
        ))}
      </div>
      <button onClick={() => adicionaJogador()}>Adiciona Jogador</button>
      <p>{jogadores}</p>
    </div>
  );
}
