import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import PokerTable from "./PokerTable";
import PokerMenu from "./PokerMenu";
import PokerRules from "./PokerRules";
import Menu from "./Menu";
import Foot from "./Foot";
import Home from "./Home";
import Donations from "./donations";

export default function Main() {
  const [page, setPage] = useState("Home");

  function changePage(pageName) {
    setPage(pageName);
  }

  return (
    <div>
      <div className="top">
        <Menu pageFunction={changePage} />
      </div>
      <div className="middle">
        {page === "Home" && <Home pageFunction={changePage} />}
        {page === "PokerMenu" && <PokerMenu pageFunction={changePage} />}
        {page === "PokerTable" && <PokerTable />}
        {page === "PokerRules" && <PokerRules />}
      </div>
      <div className="bottom">
        <Foot />
        <Donations />
      </div>
    </div>
  );
}
