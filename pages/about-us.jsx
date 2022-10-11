import { useState } from "react";
import { Deck } from "../src/deck";
import { getWinners } from "../src/drawsValidations";
import { handToString } from "../src/rules";
import Donations from "./donations";

export default function PokerMenu() {
  return (
    <div className="aboutUsMain">
<<<<<<< HEAD
      <img className="creatorsPic" src="/aboutus-assets/grouppic.png" />
      
=======
      <img src="/aboutus-assets/grouppic.png" alt="Creators"/>
>>>>>>> b936c688842af700a7246b04079135a9e4ead3b7
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
