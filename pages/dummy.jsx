import { useState } from "react";
import { Deck } from "../src/deck";
import { getWinners } from "../src/drawsValidations";
import { handToString } from "../src/rules";

/* DEBUGGING 
const community = [
  { value: 1, suit: "diamonds" },
  { value: 2, suit: "diamonds" },
  { value: 12, suit: "diamonds" },
  { value: 4, suit: "diamonds" },
  { value: 5, suit: "diamonds" }
]
const player = [
    { value: 3, suit: "diamonds" },
    { value: 7, suit: "diamonds" }
  ] 
 */
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
  const [vencedoresRodada, setVencedoresRodada] = useState([]);
  const [deck, setDeck] = useState(DECK_DEFAULT);
  const [communityCards, setCommunityCards] = useState([]);

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
  };

  const adicionaJogador = () => {
    //console.log(handToString(community, player)) DEBUGGING
    setJogadores((prev) => [...prev, prev.length + 1]);
  };

  const dealCommunits = () => {
    for (let i = jogadores.length * 2; i < 2 * jogadores.length + 5; i++) {
      setCommunityCards(prev => [...prev, deck[i]])
    }
  };

  const vencedor = () => {
    setVencedoresRodada(getWinners(communityCards, jogadores))
  };

  return (
    <div className="main">
      <div className="table">
        {jogadores.map((player, i) => (
          <div key={i}>
            {player[0]?.value === undefined && player[1]?.value === undefined
              ? `?`
              : `Carta 1: ${player[0].value} ${player[0].suit} Carta 2: ${player[1].value} ${player[1].suit} ${handToString(communityCards, player)}`}
          </div>
        ))}
        {communityCards.map((community, i) => (
          <div style={{
            color: community.suit === "hearts" ? "red" : (community.suit === "diamonds" ? "yellow" : (community.suit === "clubs" ? "green" : "blue"))
          }} key={i}>
            {community?.value === undefined && community?.value === undefined
              ? `?`
              : `${community.value} ${community.suit}`}
          </div>
        ))}
      </div>

      <button onClick={() => adicionaJogador()}>Adiciona Jogador</button>
      <button onClick={() => shuffle()}>Shuffle</button>
      <button onClick={() => deal()}>Deal</button>
      <button onClick={() => dealCommunits()}>Deal Communits</button>
      <button onClick={() => vencedor()}>Vencedor</button>
      <button onClick={() => adicionaJogador()}>Remover Jogador</button>

      {vencedoresRodada.length !== 0 && <p>Vencerdor(es): {vencedoresRodada.map((vencedor, i) => <span key={i} >{`Jogador: Carta 1: ${vencedor[0].value} ${vencedor[0].suit} Carta 2: ${vencedor[1].value} ${vencedor[1].suit} ${handToString(communityCards, vencedor)}`}</span>)}</p>}
    </div>
  );
}
