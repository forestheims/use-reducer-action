import React, { useReducer } from "react";
import ItemControls from "../components/ItemControls/ItemControls";
import ItemsList from "../components/ItemsList/ItemsList";

export default function Home() {
  const itemsReducer = (state, { type, payload }) => {
    switch (type) {
      case "add":
        return {
          items: [...state.items, { id: items.length, content: payload }],
        };
      case "delete":
        return { items: items.filter((item) => item.id !== payload.id) };
      case "edit":
        return { items: items.map((item) => item.id === payload.item.id) };
      default:
        throw new Error();
    }
  };

  const [items, dispatch] = useReducer(itemsReducer, []);

  const addItem = (entry) => {
    dispatch({
      type: "add",
      payload: entry,
    });
  };

  const deleteItem = (id) => {
    dispatch({
      type: "delete",
      payload: id,
    });
  };

  const editItem = (item) => {
    dispatch({
      type: "edit",
      payload: item,
    });
  };

  return (
    <>
      <ItemControls addItem={addItem} />
      <ItemsList items={items} deleteItem={deleteItem} editItem={editItem} />
    </>
  );
}
