import { render, screen } from "@testing-library/react";
import { ItemsProvider } from "../context/ItemsContext";
import Header from "./Header";

test("renders learn react link", () => {
  render(
    <ItemsProvider>
      <Header />
    </ItemsProvider>
  );
  const linkElement = screen.getByText(/your shopping list is empty/i);
  expect(linkElement).toBeInTheDocument();
});
