import { useState } from "react";
import { Deck } from "../src/deck";
import { getWinners } from "../src/drawsValidations";
import { handToString } from "../src/rules";


export default function Foot() {

  return (
    <div>
      <p>Copyright Bytes4Gamers</p>
      <p>Create by:</p>
      <ul>
        <li>Mauro Serrano</li>
        <li>Fernado Abreu</li>
        <li>Diogo ?????</li>
        <li>Gabriel ?????</li>
      </ul>
    </div>
  );
}
