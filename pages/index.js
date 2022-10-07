import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Dummy from "./dummy";

export default function Home() {
  return (
    <div className={styles.container}>
      <Dummy />
    </div>
  );
}
