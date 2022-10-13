import { useState } from "react";
import { Deck } from "../src/deck";
import { getWinners } from "../src/drawsValidations";
import { handToString } from "../src/rules";
import Link from "next/link";
import { useEffect } from "react";

export default function PokerMenu(props) {
  const [tables, setTables] = useState([]);
  const [link, setLink] = useState("");

  useEffect(() => {
    const options = {
      method: "GET",
    };
    fetch("/api/tables", options)
      .then((response) => response.json())
      .then((response) => setTables(response.tables))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="main">
      <div className="tables">
        {tables.map((table, i) => (
          <div key={`Table: ${i}`}>
            <Link href={`/poker-table?game=${table._id}`}>
              <a>
                <button>
                  {`Table: ${i + 1} Players: ${table.players.length}/${
                    table.maxPlayers
                  }`}
                </button>
              </a>
            </Link>
          </div>
        ))}
      </div>
      <Link href="/new-table">
        <a>
          <button>Create new table</button>
        </a>
      </Link>
    </div>
  );
}
