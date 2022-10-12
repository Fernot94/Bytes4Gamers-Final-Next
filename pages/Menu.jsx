import { useState } from "react";
import { Deck } from "../src/deck";
import { getWinners } from "../src/drawsValidations";
import { handToString } from "../src/rules";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Menu(props) {
  const [usernameOrEmail, setUsernameOrEmail] = useState(props.user);
  const router = useRouter();

  return (
    <div className="menu">
      <div className="abas">
        <Link href="/home">
          <a>
            <button disabled={router.asPath === "/home"}>Home</button>
          </a>
        </Link>
        <Link href="/rules">
          <a>
            <button disabled={router.asPath === "/rules"}>Rules</button>
          </a>
        </Link>
        <Link href="/how-to-play">
          <a>
            <button disabled={router.asPath === "/how-to-play"}>
              How To Play
            </button>
          </a>
        </Link>
        <Link href="/about-us">
          <a>
            <button disabled={router.asPath === "/about-us"}>About Us</button>
          </a>
        </Link>
      </div>
      {usernameOrEmail === undefined ? (
        <div className="auth">
          <Link href="/login">
            <a>
              <button disabled={false}>Login</button>
            </a>
          </Link>
          <Link href="/register">
            <a>
              <button disabled={false}>Register</button>
            </a>
          </Link>
        </div>
      ) : (
        <div>ola</div>
      )}
    </div>
  );
}
