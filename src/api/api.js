const API_URL = "https://in.bmscdn.com/m6/static/interview-mock/data.json";

export const fetchMovieData = async () => {
  try {
    // fetching the list of movies data
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.moviesData;
  } catch (error) {
    console.error("Error fetching movie data:", error);
    throw new Error("Failed to fetch movie data");
  }
};
