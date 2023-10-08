import React from "react";
import { render, screen } from "@testing-library/react";
import MovieGenre from "./MovieGenre";

const mockGenres = "Action|Adventure|Sci-Fi";

describe("MovieGenre", () => {
  test("renders correctly", () => {
    render(<MovieGenre genere={mockGenres} />);

    const genreContainer = screen.getByTestId("genre-container");
    const genres = screen.getAllByTestId("genre");

    expect(genreContainer).toBeInTheDocument();
    expect(genres.length).toBe(3); // Assuming there are 3 genres in the mock data
    expect(genres[0]).toHaveTextContent("Action");
    expect(genres[1]).toHaveTextContent("Adventure");
    expect(genres[2]).toHaveTextContent("Sci-Fi");
  });
});
