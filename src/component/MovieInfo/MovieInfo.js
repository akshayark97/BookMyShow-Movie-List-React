import DummyBox from "../DummyBox";
import Impression from "../Impression/Impression";
import MovieGenre from "../MovieGenre/MovieGenre";
import "./MovieInfo.css";

const MovieInfo = ({ clickedMovie }) => {
  return (
    <div className="black-container">
      <div>
        <p className="event-title">{clickedMovie.EventTitle}</p>
        <p className="event-lang">{clickedMovie.EventLanguage.toUpperCase()}</p>
        <MovieGenre genere={clickedMovie.EventGenre} />
        <Impression clickedMovie={clickedMovie} />
        <div className="event-description">Description</div>
        <a className="readmore" href="#">
          Read More
        </a>
      </div>
      <div className="info-dummy-box">
        <div>
          <DummyBox width="20px" height="20px" />
          <p className="will-poll-color">WILL WATCH</p>
          <p className="will-poll-color">({clickedMovie.wtsCount})</p>
        </div>
        <div>
          <DummyBox width="20px" height="20px" />
          <p className="maybe-poll-color">MAYBE</p>
          <p className="maybe-poll-color">({clickedMovie.maybeCount})</p>
        </div>
        <div>
          <DummyBox width="20px" height="20px" />
          <p className="dont-poll-color">WON'T WATCH</p>
          <p className="dont-poll-color">({clickedMovie.dwtsCount})</p>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
