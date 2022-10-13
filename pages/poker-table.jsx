import { useRouter } from "next/router";
import { func } from "prop-types";
import { useEffect, useState } from "react";
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
  { value: 13, suit: "spades" },
  { value: 10, suit: "clubs" },
  { value: 2, suit: "spades" },
  { value: 3, suit: "spades" },
  { value: 10, suit: "diamonds" },
  { value: 11, suit: "diamonds" },
  { value: 7, suit: "spades" },
  { value: 3, suit: "clubs" },
  { value: 11, suit: "clubs" },
  { value: 6, suit: "diamonds" },
  { value: 5, suit: "spades" },
  { value: 12, suit: "diamonds" },
  { value: 1, suit: "clubs" },
  { value: 12, suit: "spades" },
  { value: 13, suit: "hearts" },
  { value: 2, suit: "diamonds" },
  { value: 13, suit: "diamonds" }
]
const PLAYER_DEFAULT = { username: "Player", cards: ["", ""], chips: 999999 }

export default function PokerTable() {
  const router = useRouter()
  const [userLogado, setUserLogado] = useState({ username: "" });
  const [tableInfos, setTableInfos] = useState();

  const getUserLogado = () => {
    const userToken = localStorage.getItem("token")
    if (userToken === null || userToken === undefined) {
      return;
    }
    const options = { method: "GET", headers: { token: userToken } };
    fetch("/api/login", options)
      .then((response) => response.json())
      .then((response) => setUserLogado(response.user))
      .catch((err) => console.error(err));
  };

  function updateTable() {
    const options = { method: "GET", headers: { id: window.location.search.substring(1).split("=")[1] } };
    fetch("/api/table", options)

      .then((response) => response.json())
      .then((response) => {
        setJogadores(response.table.players)
        setTableInfos(response.table)
      })
      .catch((err) => console.error(err));
  }

  async function updateNewTable() {


    const options = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ jogoAtualizado: { ...tableInfos } })
    };

    const response = await fetch('/api/table', options)
    const json = await response.json()

  }

  useEffect(() => {
    if (tableInfos) {
      updateNewTable()
    }
  }, [tableInfos]);

  
  useEffect(() => {
    updateTable()
    getUserLogado()
    setInterval(updateTable, 1000)
  }, []);

  function adicionarCreator() {
    setJogadores(prev => [...prev, {
      user: {
        username
          :
          "GabrielSimões",
        email
          :
          "gabrielsantos@gmail.com",
        password
          :
          "A1b2C3d$",
        passwordConfirmation
          :
          "A1b2C3d$",
        acceptsTerms
          :
          true,
        acceptsCommunications
          :
          false
      }, cards: ["", ""], tableChips: 500
    }])
  }

  const [jogadores, setJogadores] = useState([]);
  const [vencedoresRodada, setVencedoresRodada] = useState([]);
  const [deck, setDeck] = useState(DECK_DEFAULT);
  const [flop, setFlop] = useState([]);
  const [turn, setTurn] = useState([]);
  const [river, setRiver] = useState([]);

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

  /*  const adicionaJogador = () => {
     setJogadores((prev) => [...prev, { ...PLAYER_DEFAULT, username: `Player ${prev.length + 1}` }]);
   };
  */
  const dealFlop = () => {
    for (let i = jogadores.length * 2; i < 2 * jogadores.length + 3; i++) {
      setFlop(prev => [...prev, deck[i]])
    }
  };
  const dealTurn = () => {
    for (let i = 3 + jogadores.length * 2; i < 2 * jogadores.length + 4; i++) {
      setTurn(prev => [...prev, deck[i]])
    }
  };
  const dealRiver = () => {
    for (let i = 4 + jogadores.length * 2; i < 2 * jogadores.length + 5; i++) {
      setRiver(prev => [...prev, deck[i]])
    }
  };

  const vencedor = () => {
    setVencedoresRodada(getWinners(flop.concat(turn).concat(river), jogadores.map(player => player.cards)))
  };

  const getPlayerUsername = (cards) => {
    return jogadores.find(player => player.cards[0]?.value === cards[0]?.value && player.cards[0]?.suit === cards[0]?.suit && player.cards[1]?.value === cards[1]?.value && player.cards[1]?.suit === cards[1]?.suit)?.username
  }

  const resetRound = () => {
    setVencedoresRodada([])
    setFlop([])
    setTurn([])
    setRiver([])
    setJogadores(prev => prev.map(player => ({ ...player, cards: ["", ""] })))
    shuffle()
  }

  return (
    <div className="mainPoker">
      <div className="table">
        <div className="players">
          {jogadores.map((player, i) => (
            <div className="player" key={`Player ${i}`}>
              <h2>{player.user.username}</h2>
              <div className="card1" style={{ backgroundImage: (player.cards[0] === "" || player.user.username !== userLogado.username) ? "url(/cards-assets/back-cards.png)" : `url(/cards-assets/${player.cards[0].value}_of_${player.cards[0].suit}.png` }} ></div>
              <div className="card2" style={{ backgroundImage: (player.cards[1] === "" || player.user.username !== userLogado.username) ? "url(/cards-assets/back-cards.png)" : `url(/cards-assets/${player.cards[1].value}_of_${player.cards[1].suit}.png` }} ></div>
            </div>
          ))}
        </div>
        <div className="communityCards">
          <div className="flop">
            {flop.map((community, i) => (
              <div key={`Community ${i}`} className="communityCard" style={{ backgroundImage: `url(/cards-assets/${community.value}_of_${community.suit}.png` }}>
              </div>
            ))}
          </div>
          <div className="turn">
            {turn.map((community, i) => (
              <div key={`Community ${i}`} className="communityCard" style={{ backgroundImage: `url(/cards-assets/${community.value}_of_${community.suit}.png` }}>
              </div>
            ))}
          </div>
          <div className="river">
            {river.map((community, i) => (
              <div key={`Community ${i}`} className="communityCard" style={{ backgroundImage: `url(/cards-assets/${community.value}_of_${community.suit}.png` }}>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <button onClick={() => teste()}>Teste</button>
        <button onClick={() => adicionarCreator()}>Adicionar player</button>
        <button onClick={() => deal()}>Deal</button>
        <button onClick={() => dealFlop()}>Deal Flop</button>
        <button onClick={() => dealTurn()}>Deal Turn</button>
        <button onClick={() => dealRiver()}>Deal River</button>
        <button onClick={() => vencedor()}>Vencedor</button>
        <button onClick={() => resetRound()}>Reset</button>
      </div>
      {vencedoresRodada.length !== 0 && <div>Vencerdor(es): {vencedoresRodada.map((vencedor, i) => <p key={i} >{`${getPlayerUsername(vencedor)} ${handToString(flop.concat(turn).concat(river), vencedor)}`}</p>)}</div>}
    </div>
  );
}
