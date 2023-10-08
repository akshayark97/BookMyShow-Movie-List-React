import "./MovieGenre.css";

const MovieGenre = ({ genere }) => {
  const movieGenere = genere.split("|"); // make an array of data by split with |

  return (
    <div className="genre-container">
      {movieGenere.map((genere) => (
        <p className="genre">{genere}</p>
      ))}
    </div>
  );
};

export default MovieGenre;
