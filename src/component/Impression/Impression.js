import { formateDate } from "../../utility";
import "./Impression.css";
import DummyBox from "../DummyBox";

const Impression = ({ clickedMovie }) => {
  const formattedDate = formateDate(clickedMovie); //format the date from ex. DD MMM YYYY to MMM YYYY ex. 29 Mar 2019 to Mar 2019

  return (
    <div className="impression-container">
      <div className="ratings">
        <div>
          <DummyBox width="20px" height="20px" />
        </div>
        <div>
          <div className="wtcPer">{clickedMovie.ratings.wtsPerc}%</div>
          <div className="wtsCount">{clickedMovie.ratings.wtsCount} votes</div>
        </div>
      </div>
      <div className="date-container">
        <DummyBox width="20px" height="20px" />
        <div className="date-text">{formattedDate}</div>
      </div>
    </div>
  );
};

export default Impression;
