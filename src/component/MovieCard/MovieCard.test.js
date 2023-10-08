import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MovieCard from "./MovieCard";

// create a mock data
const mockMovie = {
  EventTitle: "Test Movie",
  EventImageUrl: "test-image.jpg",
  TrailerURL: "https://example.com/trailer"
};

describe("MovieCard", () => {
  test("renders correctly", () => {
    render(<MovieCard movie={mockMovie} onWatchTrailer={() => {}} />);
    const movieCard = screen.getByTestId("movie-card");

    expect(movieCard).toBeInTheDocument();
    expect(screen.getByAltText(mockMovie.EventTitle)).toBeInTheDocument();
    expect(screen.getByText(mockMovie.EventTitle)).toBeInTheDocument();
  });

  test("calls onWatchTrailer when clicked", () => {
    const onWatchTrailerMock = jest.fn();
    render(<MovieCard movie={mockMovie} onWatchTrailer={onWatchTrailerMock} />);
    const movieCard = screen.getByTestId("movie-card");

    fireEvent.click(movieCard); //onclick of movie card

    expect(onWatchTrailerMock).toHaveBeenCalledWith(
      mockMovie.TrailerURL,
      mockMovie
    );
  });
});
