import React, { useState } from "react";
import "./ItemControls.css";

export default function ItemControls({ addItem }) {
  const [entry, setEntry] = useState("");
  return (
    <div className="controls">
      <label>New Item:</label>
      <input
        type="text"
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
      />
      <button
        onClick={() => {
          addItem(entry);
          setEntry("");
        }}
      >
        Add Item
      </button>
    </div>
  );
}
