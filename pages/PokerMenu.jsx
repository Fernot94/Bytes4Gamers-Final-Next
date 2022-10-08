import { useState } from "react";
import { Deck } from "../src/deck";
import { getWinners } from "../src/drawsValidations";
import { handToString } from "../src/rules";

export default function PokerMenu(props) {
  const [tables, setTables] = useState(["table 0", "table 1", "table 2", "table 3", "table 4"]);

  return (
    <div className="main">
      <div className="tables">
        {tables.map((table, i) => <div key={`Table: ${i}`}>{table}</div>)}
      </div>
      <button>Create new table</button>
      <button onClick={() => props.pageFunction("PokerTable")} >Test Table</button>
    </div>
  );
}
