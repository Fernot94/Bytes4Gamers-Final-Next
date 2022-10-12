import { useState } from "react";
import { Deck } from "../src/deck";
import { getWinners } from "../src/drawsValidations";
import { handToString } from "../src/rules";
import Link from "next/link";
import { useRouter } from "next/router";
import { isLogged } from "./Login";
import { useEffect } from "react";

export default function Menu() {
  const [userToken, setUserToken] = useState();
  const [user, setUser] = useState({ username: "vazio" });
  const router = useRouter();

  const getUserAll = () => {
    if (userToken === undefined) {
      return;
    }
    const options = { method: "GET", headers: { token: userToken } };
    fetch("/api/login", options)
      .then((response) => response.json())
      .then((response) => setUser(response.user))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    setUserToken(localStorage.getItem("token"));
  }, []);

  useEffect(() => {
    getUserAll();
  }, [userToken]);

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
      {!userToken ? (
        <div className="auth">
          <Link href="/login">
            <a>
              <button disabled={router.asPath === "/login"}>Login</button>
            </a>
          </Link>
          <Link href="/register">
            <a>
              <button disabled={router.asPath === "/register"}>Register</button>
            </a>
          </Link>
        </div>
      ) : (
        <div className="isLoggedIn">
          <button disabled>Chips: {user.chips}</button>
          <button disabled>{user.username}</button>
          <Link href="/logout">
            <a>
              <button>Logout</button>
            </a>
          </Link>
        </div>
      )}
    </div>
  );
}
