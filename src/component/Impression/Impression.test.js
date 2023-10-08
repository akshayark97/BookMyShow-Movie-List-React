import React from "react";
import { render, screen } from "@testing-library/react";
import Impression from "./Impression";

const mockClickedMovie = {
  ratings: {
    wtsPerc: 75,
    wtsCount: 100
  }
};

jest.mock("./DummyBox", () => () => <div data-testid="dummy-box" />);

describe("Impression", () => {
  test("renders correctly", () => {
    render(<Impression clickedMovie={mockClickedMovie} />);

    const impressionContainer = screen.getByTestId("impression-container");
    const ratings = screen.getByText("75%");
    const wtsCount = screen.getByText("100 votes");
    const formattedDate = screen.getByText(
      expect.stringMatching(/\w{3} \d{4}/)
    ); // Assuming the formatted date is in the format "Month Year"

    expect(impressionContainer).toBeInTheDocument();
    expect(ratings).toBeInTheDocument();
    expect(wtsCount).toBeInTheDocument();
    expect(formattedDate).toBeInTheDocument();
    expect(screen.getByTestId("dummy-box")).toBeInTheDocument();
  });
});
