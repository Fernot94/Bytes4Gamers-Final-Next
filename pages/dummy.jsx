import { useState } from "react";
import { Deck } from "../src/deck";
import { getWinners } from "../src/drawsValidations";
const community = [
  { value: 5, suit: "spades" },
  { value: 10, suit: "diamonds" },
  { value: 1, suit: "diamonds" },
  { value: 9, suit: "diamonds" },
  { value: 5, suit: "clubs" }
]
const players = [
  [
    { value: 2, suit: "hearts" },
    { value: 8, suit: "spades" }
  ],
  [
    { value: 1, suit: "spades" },
    { value: 13, suit: "spades" }
  ],
  [
    { value: 1, suit: "clubs" },
    { value: 2, suit: "diamonds" }
  ],
  [
    { value: 12, suit: "diamonds" },
    { value: 13, suit: "diamonds" }
  ],
  [
    { value: 7, suit: "clubs" },
    { value: 7, suit: "spades" }
  ]
]

const DECK_DEFAULT = [
  { value: 1, suit: "hearts" },
  { value: 2, suit: "hearts" },
  { value: 3, suit: "hearts" },
  { value: 4, suit: "hearts" },
  { value: 5, suit: "hearts" },
  { value: 6, suit: "hearts" },
  { value: 7, suit: "hearts" },
  { value: 8, suit: "hearts" },
  { value: 9, suit: "hearts" },
  { value: 10, suit: "hearts" },
  { value: 11, suit: "hearts" },
  { value: 12, suit: "hearts" },
  { value: 13, suit: "hearts" },
  { value: 1, suit: "spades" },
  { value: 2, suit: "spades" },
  { value: 3, suit: "spades" },
  { value: 4, suit: "spades" },
  { value: 5, suit: "spades" },
  { value: 6, suit: "spades" },
  { value: 7, suit: "spades" },
  { value: 8, suit: "spades" },
  { value: 9, suit: "spades" },
  { value: 10, suit: "spades" },
  { value: 11, suit: "spades" },
  { value: 12, suit: "spades" },
  { value: 13, suit: "spades" },
  { value: 1, suit: "clubs" },
  { value: 2, suit: "clubs" },
  { value: 3, suit: "clubs" },
  { value: 4, suit: "clubs" },
  { value: 5, suit: "clubs" },
  { value: 6, suit: "clubs" },
  { value: 7, suit: "clubs" },
  { value: 8, suit: "clubs" },
  { value: 9, suit: "clubs" },
  { value: 10, suit: "clubs" },
  { value: 11, suit: "clubs" },
  { value: 12, suit: "clubs" },
  { value: 13, suit: "clubs" },
  { value: 1, suit: "diamonds" },
  { value: 2, suit: "diamonds" },
  { value: 3, suit: "diamonds" },
  { value: 4, suit: "diamonds" },
  { value: 5, suit: "diamonds" },
  { value: 6, suit: "diamonds" },
  { value: 7, suit: "diamonds" },
  { value: 8, suit: "diamonds" },
  { value: 9, suit: "diamonds" },
  { value: 10, suit: "diamonds" },
  { value: 11, suit: "diamonds" },
  { value: 12, suit: "diamonds" },
  { value: 13, suit: "diamonds" }
];

export default function Dummy() {
  const [jogadores, setJogadores] = useState([]);
  const [deck, setDeck] = useState(DECK_DEFAULT);

  const shuffle = () => {
    let newDeck = DECK_DEFAULT
    setDeck(newDeck.sort(() => Math.random() - 0.5))
  }

  const deal = () => {
    for (let i = 0; i < 2 * jogadores.length; i++) {
      if (i < jogadores.length)
        setJogadores(prev => prev.map((player, j) => j === i ? [deck[i]] : player))
      else
        setJogadores(prev => prev.map((player, j) => j === i - jogadores.length ? [...player, deck[i]] : player))
    }
    console.log(jogadores)
  };

  const adicionaJogador = () => {
    setJogadores((prev) => [...prev, prev.length + 1]);
  };

  return (
    <div className="main">
      <div className="table">
        {jogadores.map((player, i) => (
          <div key={i}>
            {player.value === undefined
              ? "?"
              : `${player.value} ${player.suit}`}
          </div>
        ))}
      </div>

      <button onClick={() => adicionaJogador()}>Adiciona Jogador</button>
      <button onClick={() => adicionaJogador()}>Remover Jogador</button>
      <button onClick={() => deal()}>Deal</button>
      <button onClick={() => shuffle()}>Shuffle</button>
    </div>
  );
}
