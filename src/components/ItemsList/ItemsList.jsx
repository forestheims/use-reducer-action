import React, { useState } from "react";
import "./ItemsList.css";

export default function ItemsList({ items, deleteItem, editItem, setEdit }) {
  const [newText, setNewText] = useState("");

  console.log(items);
  return (
    <div className="items-list">
      {items.map((item) => (
        <div key={item.id} className="item">
          <div>{item.text}</div>
          <button onClick={() => deleteItem(item.id)}>delete</button>
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
                save
              </button>
            </>
          ) : (
            <button onClick={() => setEdit(item.id)}>Edit</button>
          )}
        </div>
      ))}
    </div>
  );
}
