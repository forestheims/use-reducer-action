import React from "react";
import { useItems } from "../context/ItemsContext";

export default function Header() {
  const { items, clear } = useItems();
  return (
    <header>
      {items.length === 0 ? (
        "Your shopping list is empty"
      ) : (
        <span>You have {items.length} items on your list</span>
      )}
      <button onClick={clear}>Clear Shopping List</button>
    </header>
  );
}
