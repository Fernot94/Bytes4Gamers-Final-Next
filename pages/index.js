import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import PokerTable from "./PokerTable";
import PokerMenu from "./PokerMenu";
import HowToPlay from "./HowToPlay";
import Menu from "./Menu";
import Foot from "./Foot";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Rules from "./Rules";
import SignUp from "./SignUp";

export default function Main() {
  const [page, setPage] = useState("Home");

  function changePage(pageName) {
    setPage(pageName);
  }

  return (
    <div>
      <div className="top">
        <Menu pageFunction={changePage} page={page} />
      </div>
      <div className="middle">
        {page === "Home" && <Home pageFunction={changePage} />}
        {page === "PokerMenu" && <PokerMenu pageFunction={changePage} />}
        {page === "PokerTable" && <PokerTable />}
        {page === "HowToPlay" && <HowToPlay />}
        {page === "AboutUs" && <AboutUs />}
        {page === "Rules" && <Rules />}
        {page === "SignUp" && <SignUp />}
      </div>
      <div className="bottom">
        <Foot />
      </div>
    </div>
  );
}
