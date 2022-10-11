import { useState } from "react";
import { Deck } from "../src/deck";
import { getWinners } from "../src/drawsValidations";
import { handToString } from "../src/rules";
import Donations from "./Donations";

export default function PokerMenu(props) {
  return (
    <div className="aboutUsMain">
      <img className="creatorsPic" src="/aboutus-assets/grouppic.png" />
      
      <p>Created by:</p>
      <ul>
        <li>Mauro Serrano</li>
        <li>Fernado Abreu</li>
        <li>Diogo Paulo</li>
        <li>Gabriel Simões</li>
        <p></p>
      </ul>
      <Donations />
    </div>
  );
}
