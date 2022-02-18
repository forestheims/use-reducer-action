import React, { useState } from "react";

export default function ItemsList({ items, deleteItem, editItem }) {
  const [newText, setNewText] = useState("");
  const [edit, setEdit] = useState(false);

  console.log(items);
  return (
    <div className="items-list">
      <button onClick={() => setEdit(!edit)}>Edit Items</button>
      {items.map((item) => (
        <div key={item.id}>
          <div>{item.text}</div>
          <button onClick={() => deleteItem(item.id)}>delete</button>

          {edit && (
            <>
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
              />
              <button onClick={() => editItem({ id: item.id, text: newText })}>
                save
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
