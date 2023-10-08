import React from "react";
import { render, screen } from "@testing-library/react";
import MovieInfo from "./MovieInfo";

// Creating the mock data
const mockClickedMovie = {
  EventTitle: "Test Movie",
  EventLanguage: "English",
  EventGenre: "Action|Adventure",
  ratings: { wtsPerc: 75, wtsCount: 100, maybeCount: 20, dwtsCount: 5 }
};

jest.mock("./DummyBox", () => () => <div data-testid="dummy-box" />);
jest.mock("./Impression", () => () => (
  <div data-testid="impression-container" />
));
jest.mock("./MovieGenre", () => () => <div data-testid="genre-container" />);

describe("MovieInfo", () => {
  test("renders correctly", () => {
    render(<MovieInfo clickedMovie={mockClickedMovie} />); // render MovieInfo

    const blackContainer = screen.getByTestId("black-container");
    const eventTitle = screen.getByText("Test Movie");
    const eventLang = screen.getByText("ENGLISH");
    const dummyBoxes = screen.getAllByTestId("dummy-box");
    const impression = screen.getByTestId("impression-container");
    const movieGenre = screen.getByTestId("genre-container");

    expect(blackContainer).toBeInTheDocument();
    expect(eventTitle).toBeInTheDocument();
    expect(eventLang).toBeInTheDocument();
    expect(dummyBoxes.length).toBe(3); // Assuming there are 3 DummyBoxes
    expect(impression).toBeInTheDocument();
    expect(movieGenre).toBeInTheDocument();
  });
});
