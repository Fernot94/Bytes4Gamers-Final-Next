import { useState } from "react";
import { Deck } from "../src/deck";
import { getWinners } from "../src/drawsValidations";
import { handToString } from "../src/rules";

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
const DECK_DEBUGGING = [
  { value: 13, suit: "diamonds" },
  { value: 13, suit: "clubs" },
  { value: 3, suit: "hearts" },
  { value: 4, suit: "spades" },
  { value: 5, suit: "hearts" },
  { value: 7, suit: "hearts" },
  { value: 8, suit: "clubs" },
  { value: 9, suit: "hearts" },
  { value: 10, suit: "spades" },
  { value: 11, suit: "hearts" },
  { value: 12, suit: "spades" },
  { value: 6, suit: "diamonds" },
  { value: 1, suit: "hearts" }
]
const PLAYER_DEFAULT = { username: "Player", cards: ["", ""], chips: 999999 }
export default function PokerTable() {
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
        setJogadores(prev => prev.map((player, j) => j === i ? { ...player, cards: [deck[i], ""] } : player))
      else
        setJogadores(prev => prev.map((player, j) => j === i - jogadores.length ? { ...player, cards: [player.cards[0], deck[i]] } : player))
    }
  };

  const adicionaJogador = () => {
    setJogadores((prev) => [...prev, { ...PLAYER_DEFAULT, username: `Player ${prev.length + 1}` }]);
  };

  const dealCommunits = () => {
    for (let i = jogadores.length * 2; i < 2 * jogadores.length + 5; i++) {
      setCommunityCards(prev => [...prev, deck[i]])
    }
  };

  const vencedor = () => {
    console.log(getWinners(communityCards, jogadores.map(player => player.cards)))
    setVencedoresRodada(getWinners(communityCards, jogadores.map(player => player.cards)))
  };

  const getPlayerUsername = (cards) => {
    return jogadores.find(player => player.cards[0].value === cards[0].value && player.cards[0].suit === cards[0].suit && player.cards[1].value === cards[1].value && player.cards[1].suit === cards[1].suit).username
  }

  const resetRound = () => {

  }

  return (
    <div className="mainPoker">
      <div className="table">
        <div className="players">
          {jogadores.map((player, i) => (
            <div className="player" key={`Player ${i}`}>
              <div className="card1" style={{ backgroundImage: player.cards[0] === "" ? "url(/black_joker.png)" : `url(/${player.cards[0].value}_of_${player.cards[0].suit}.png` }} ></div>
              <div className="card2" style={{ backgroundImage: player.cards[1] === "" ? "url(/black_joker.png)" : `url(/${player.cards[1].value}_of_${player.cards[1].suit}.png` }} ></div>
            </div>
          ))}
        </div>
        <div className="communityCards">
          {communityCards.map((community, i) => (
            <div key={`Community ${i}`} className="communityCard" style={{ backgroundImage: `url(/${community.value}_of_${community.suit}.png` }}>
            </div>
          ))}
        </div>
      </div>
      <div>
        <button onClick={() => adicionaJogador()}>Adiciona Jogador</button>
        <button onClick={() => shuffle()}>Shuffle</button>
        <button onClick={() => deal()}>Deal</button>
        <button onClick={() => dealCommunits()}>Deal Communits</button>
        <button onClick={() => vencedor()}>Vencedor</button>
        <button>Remover Jogador</button>
      </div>
      {vencedoresRodada.length !== 0 && <div>Vencerdor(es): {vencedoresRodada.map((vencedor, i) => <p key={i} >{`${getPlayerUsername(vencedor)} ${handToString(communityCards, vencedor)}`}</p>)}</div>}
    </div>
  );
}
