import { useState } from "react";
import { Deck } from "../src/deck";
import { getWinners } from "../src/drawsValidations";
import { handToString } from "../src/rules";


export default function Menu(props) {

  return (
    <div>
      <div>
        <button onClick={() => props.pageFunction("Home")} >Home</button>
        <button onClick={() => props.pageFunction("Games")} >Games</button>
        <button onClick={() => props.pageFunction("Ranking")} >Ranking</button>
        <button onClick={() => props.pageFunction("PokerRules")} >Rules</button>
        <button onClick={() => props.pageFunction("Support")} >Support</button>
      </div>
    </div>
  );
}
