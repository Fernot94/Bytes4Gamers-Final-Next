import { useState } from "react";
import { Deck } from "../src/deck";
import { getWinners } from "../src/drawsValidations";
import { handToString } from "../src/rules";
import Link from "next/link";

export default function PokerMenu(props) {
  const [tables, setTables] = useState(["table 0", "table 1", "table 2", "table 3", "table 4"]);

  return (
    <div className="main">
      <div className="tables">
        {tables.map((table, i) => <div key={`Table: ${i}`}>{table}</div>)}
      </div>
      <Link href="/new-table">
        <a>
          <button >Create new table</button>
        </a>
      </Link>
      <Link href="/poker-table">
        <a>
          <button >Test Table</button>
        </a>
      </Link>
    </div>
  );
}
