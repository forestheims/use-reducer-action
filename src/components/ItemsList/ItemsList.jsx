import React from "react";

export default function ItemsList({ items, deleteItem, editItem }) {
  console.log(items);
  return (
    <div className="items-list">
      {items.map((item) => (
        <div key={item.id}>
          <div>{item.text}</div>
          <button onClick={() => deleteItem(item.id)}>delete</button>
          <button onClick={() => editItem(item)}>edit</button>
        </div>
      ))}
    </div>
  );
}
