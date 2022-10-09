import { useState } from "react";
import { Deck } from "../src/deck";
import { getWinners } from "../src/drawsValidations";
import { handToString } from "../src/rules";


export default function Home(props) {

  return (
    <div className="mainHome">
      <h2>Games</h2>
        <img src="/game-poker.webp" alt="Poker Game" className="gamePokerImg" onClick={() => props.pageFunction("PokerMenu")} />
    </div>
  );
}
