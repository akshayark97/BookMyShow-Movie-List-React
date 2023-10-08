import React from "react";
import { render, screen } from "@testing-library/react";
import MovieList from "./MovieList";

// Creating the mock data
const mockMovies = [
  {
    EventCode: "123",
    EventTitle: "Movie 1",
    EventImageUrl: "image1.jpg"
  },
  {
    EventCode: "456",
    EventTitle: "Movie 2",
    EventImageUrl: "image2.jpg"
  }
];

jest.mock("./MovieCard", () => ({ movie }) => (
  <div data-testid={`movie-card-${movie.EventCode}`}>{movie.EventTitle}</div>
));

describe("MovieList", () => {
  test("renders correctly", () => {
    render(<MovieList movies={mockMovies} onWatchTrailer={() => {}} />); // render MovieList

    const movieGrid = screen.getByTestId("movie-grid");
    const movieCards = screen.getAllByTestId(/^movie-card/);

    expect(movieGrid).toBeInTheDocument();
    expect(movieCards.length).toBe(2); // Assuming there are 2 movies in the mock data
    expect(movieCards[0]).toHaveTextContent("Movie 1");
    expect(movieCards[1]).toHaveTextContent("Movie 2");
  });
});
