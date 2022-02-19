import React, { useState } from "react";
import "./ItemsList.css";

export default function ItemsList({ items, deleteItem, editItem, setEdit }) {
  const [newText, setNewText] = useState("");

  return (
    <div className="items-list">
      {items.map((item) => (
        <div key={item.id} className="item">
          <div>{item.text}</div>
          {item.edit ? (
            <>
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
              />
              <button
                onClick={() => {
                  editItem({ id: item.id, text: newText });
                  setNewText("");
                }}
              >
                Save
              </button>
            </>
          ) : (
            <div>
              <button onClick={() => deleteItem(item.id)}>Delete</button>
              <button onClick={() => setEdit(item.id)}>Edit</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
