import React, { useReducer } from "react";

export default function Home() {
    const itemsReducer = (items, { type, payload }) => {
      switch (type) {
        case "add":
          return [...items, { id: items.length, text: payload }];
        case "delete":
          return items.filter((item) => item.id !== payload);
        case "edit":
          const newItems = items.filter((item) => item.id !== payload.id);
          return [...newItems, { id: payload.id, text: payload.text }];
        default:
          throw new Error("reducer does not have a type case for that action");
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
  
    const editItem = (entry) => {
      dispatch({
        type: "edit",
        payload: entry,
      });
    };