import React, { useState } from "react";
import { useItems } from "../../context/ItemsContext";
import "./ItemControls.css";

export default function ItemControls() {
  const [entry, setEntry] = useState("");
  const { addItem } = useItems();

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
