import DummyBox from "../DummyBox";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="left-header-content">
        <p className="header-title">Movie Trailers</p>
        <button className="coming-soon-button">COMING SOON</button>
        <button className="now-showing-button">NOW SHOWING</button>
      </div>
      <div className="right-header-content">
        <DummyBox width="50px" height="20px" />
        <DummyBox width="50px" height="20px" />
        <DummyBox width="50px" height="20px" />
        <DummyBox width="20px" height="20px" />
      </div>
    </div>
  );
};

export default Header;
