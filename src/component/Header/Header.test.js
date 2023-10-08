import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

jest.mock("./DummyBox", () => () => <div data-testid="dummy-box" />);

describe("Header", () => {
  test("renders correctly", () => {
    render(<Header />); //rendering the Header component

    const headerContainer = screen.getByTestId("header-container");
    const headerTitle = screen.getByText("Movie Trailers");
    const comingSoonButton = screen.getByText("COMING SOON");
    const nowShowingButton = screen.getByText("NOW SHOWING");
    const dummyBoxes = screen.getAllByTestId("dummy-box");

    expect(headerContainer).toBeInTheDocument();
    expect(headerTitle).toBeInTheDocument();
    expect(comingSoonButton).toBeInTheDocument();
    expect(nowShowingButton).toBeInTheDocument();
    expect(dummyBoxes.length).toBe(4); // Assuming there are 4 DummyBoxes
  });
});
