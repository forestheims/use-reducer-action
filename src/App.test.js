import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("behavioral tests: create, read, update, delete items on the list", () => {
  render(<App />);
  // create
  const entryInput = screen.getByRole("textbox");
  const addButton = screen.getByRole("button");

  userEvent.type(entryInput, "cabbage");
  userEvent.click(addButton);

  let allButtons = screen.getAllByRole("button");

  expect(allButtons).toHaveLength(3);

  userEvent.type(entryInput, "potatoes");
  userEvent.click(addButton);

  allButtons = screen.getAllByRole("button");

  expect(allButtons).toHaveLength(5);

  userEvent.type(entryInput, "carrots");
  userEvent.click(addButton);

  allButtons = screen.getAllByRole("button");

  expect(allButtons).toHaveLength(7);

  // read
  expect(screen.getByText(/cabbage/i)).toBeInTheDocument();
  expect(screen.getByText(/potatoes/i)).toBeInTheDocument();
  expect(screen.getByText(/carrots/i)).toBeInTheDocument();

  // delete
  userEvent.click(allButtons[3]);

  allButtons = screen.getAllByRole("button");

  expect(allButtons).toHaveLength(5);
  expect(screen.getByText(/cabbage/i)).toBeInTheDocument();
  expect(screen.queryByText(/potatoes/i)).toBeNull();
  expect(screen.getByText(/carrots/i)).toBeInTheDocument();

  // update
  userEvent.click(allButtons[2]);

  const editInput = screen.getAllByRole("textbox")[1];

  userEvent.type(editInput, "pineapple");

  const saveEdit = screen.getAllByRole("button")[1];

  userEvent.click(saveEdit);

  expect(screen.queryByText(/cabbage/i)).toBeNull();
  expect(screen.getByText(/pineapple/i)).toBeInTheDocument();
});
