// formatting the date from DD Month YYYY to Month YYYY format
export function formateDate(clickedMovie) {
  const date = new Date(clickedMovie.ShowDate);
  const options = { month: "short", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return formattedDate;
}
