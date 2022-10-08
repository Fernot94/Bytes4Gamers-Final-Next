import { useState } from "react";
import { Deck } from "../src/deck";
import { getWinners } from "../src/drawsValidations";
import { handToString } from "../src/rules";


export default function Home(props) {

  return (
    <div>
      <button onClick={() => props.pageFunction("PokerMenu")}>Poker</button>
    </div>
  );
}
