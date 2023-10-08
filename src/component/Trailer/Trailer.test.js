import React from "react";
import { render, screen } from "@testing-library/react";
import Trailer from "./Trailer";

// mock data
const mockClickedMovie = {
  EventTitle: "Test Movie",
  EventLanguage: "English",
  EventGenre: "Action|Adventure",
  ratings: { wtsPerc: 75, wtsCount: 100, maybeCount: 20, dwtsCount: 5 }
};

// api
const mockTrailerUrl = "https://www.youtube.com/watch?v=abcd1234";

jest.mock("./MovieInfo", () => () => <div data-testid="black-container" />);

describe("Trailer", () => {
  test("renders correctly", () => {
    render(
      <Trailer trailerUrl={mockTrailerUrl} clickedMovie={mockClickedMovie} /> // rendering Trailer component
    );

    const trailerContainer = screen.getByTestId("trailer-container");
    const videoContainer = screen.getByTestId("video-container");
    const iframe = screen.getByTitle("video");
    const movieInfo = screen.getByTestId("black-container");

    expect(trailerContainer).toBeInTheDocument();
    expect(videoContainer).toBeInTheDocument();
    expect(iframe).toBeInTheDocument();
    expect(movieInfo).toBeInTheDocument();
  });
});
