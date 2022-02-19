import { createContext, useContext, useReducer } from "react";

const ItemsContext = createContext();

export function ItemsProvider({ children }) {
  const itemsReducer = (items, { type, payload }) => {
    switch (type) {
      case "add":
        return [...items, { id: items.length, text: payload, edit: false }];
      case "delete":
        return items.filter((item) => item.id !== payload);
      case "edit":
        return items.map((item) => {
          if (item.id === payload.id) {
            return { id: payload.id, text: payload.text, edit: false };
          }
          return item;
        });
      case "set-edit":
        return items.map((item) => {
          if (item.id === payload) {
            return { ...item, edit: true };
          }
          return { ...item, edit: false };
        });
      case "clear":
        return [];
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

  const setEdit = (id) => {
    dispatch({
      type: "set-edit",
      payload: id,
    });
  };

  const clear = () => {
    dispatch({
      type: "clear",
    });
  };

  const contextValue = { items, addItem, deleteItem, editItem, setEdit, clear };

  return (
    <ItemsContext.Provider value={contextValue}>
      {children}
    </ItemsContext.Provider>
  );
}

export function useItems() {
  const context = useContext(ItemsContext);
  if (context === undefined) {
    throw new Error(
      "Error: useItems needs to be called within a ItemsProvider"
    );
  }
  return context;
}
