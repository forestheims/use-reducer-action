import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { ItemsProvider } from "./context/ItemsContext";

test("behavioral tests: create, read, update, delete items on the list", () => {
  render(
    <ItemsProvider>
      <App />
    </ItemsProvider>
  );
  // create
  const entryInput = screen.getByRole("textbox");
  const addButton = screen.getAllByRole("button")[1];

  userEvent.type(entryInput, "cabbage");
  userEvent.click(addButton);

  let allButtons = screen.getAllByRole("button");

  expect(allButtons).toHaveLength(4);

  userEvent.type(entryInput, "potatoes");
  userEvent.click(addButton);

  allButtons = screen.getAllByRole("button");

  expect(allButtons).toHaveLength(6);

  userEvent.type(entryInput, "carrots");
  userEvent.click(addButton);

  allButtons = screen.getAllByRole("button");

  expect(allButtons).toHaveLength(8);

  // read
  expect(screen.getByText(/cabbage/i)).toBeInTheDocument();
  expect(screen.getByText(/potatoes/i)).toBeInTheDocument();
  expect(screen.getByText(/carrots/i)).toBeInTheDocument();

  // delete
  userEvent.click(allButtons[4]);

  allButtons = screen.getAllByRole("button");

  expect(allButtons).toHaveLength(6);
  expect(screen.getByText(/cabbage/i)).toBeInTheDocument();
  expect(screen.queryByText(/potatoes/i)).toBeNull();
  expect(screen.getByText(/carrots/i)).toBeInTheDocument();

  // update
  userEvent.click(allButtons[3]);

  const editInput = screen.getAllByRole("textbox")[1];

  userEvent.type(editInput, "pineapple");

  const saveEdit = screen.getAllByRole("button")[2];

  userEvent.click(saveEdit);

  expect(screen.queryByText(/cabbage/i)).toBeNull();
  expect(screen.getByText(/pineapple/i)).toBeInTheDocument();

  // clear all
  const clearButton = screen.getAllByRole("button")[0];

  userEvent.click(clearButton);

  allButtons = screen.getAllByRole("button");

  expect(allButtons).toHaveLength(2);
  expect(screen.queryByText(/cabbage/i)).toBeNull();
  expect(screen.queryByText(/carrots/i)).toBeNull();
  expect(screen.getByText(/your shopping list is empty/i)).toBeInTheDocument();
});
