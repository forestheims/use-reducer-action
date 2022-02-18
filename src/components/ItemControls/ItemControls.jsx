import React, { useState } from "react";

export default function ItemControls({ addItem }) {
  const [entry, setEntry] = useState("");
  return (
    <div>
      <label>New Item:</label>
      <input
        type="text"
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
      />
      <button onClick={() => addItem(entry)}>Save Item</button>
    </div>
  );
}
