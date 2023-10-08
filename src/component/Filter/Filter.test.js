import React from "react";
import { render, screen } from "@testing-library/react";
import Filter from "./Filter";

describe("Filter", () => {
  test("renders correctly", () => {
    render(<Filter />); // rendering Filter component

    const filterContainer = screen.getByTestId("filter-container");
    const filterTitle = screen.getByText("Applied Filters:");
    const langFilters = screen.getAllByTestId("lang-filter");

    expect(filterContainer).toBeInTheDocument();
    expect(filterTitle).toBeInTheDocument();
    expect(langFilters.length).toBe(2); // Assuming there are 2 language filters
    expect(langFilters[0]).toHaveTextContent("Hindi X");
    expect(langFilters[1]).toHaveTextContent("English X");
  });
});
