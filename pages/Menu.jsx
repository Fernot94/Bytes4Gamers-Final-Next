import { useState } from "react";
import { Deck } from "../src/deck";
import { getWinners } from "../src/drawsValidations";
import { handToString } from "../src/rules";

export default function Menu(props) {
  return (
    <div className="menu">
      <div className="abas">
        <button
          disabled={props.page === "Home"}
          onClick={() => props.pageFunction("Home")}
        >
          Home
        </button>
        <button
          disabled={props.page === "Rules"}
          onClick={() => props.pageFunction("Rules")}
        >
          Rules
        </button>
        <button
          disabled={props.page === "HowToPlay"}
          onClick={() => props.pageFunction("HowToPlay")}
        >
          How To Play
        </button>
        <button
          disabled={props.page === "AboutUs"}
          onClick={() => props.pageFunction("AboutUs")}
        >
          About Us
        </button>
      </div>
      <div className="auth">
        <button onClick={() => props.pageFunction("Login")}>Login</button>
        <button onClick={() => props.pageFunction("SignUp")}>Register</button>
      </div>
    </div>
  );
}
