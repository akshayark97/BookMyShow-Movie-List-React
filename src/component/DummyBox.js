const DummyBox = ({ width, height }) => {
  return (
    <p
      className="dummy-box"
      style={{ width: `${width}`, height: `${height}`, background: "white" }}
    ></p>
  );
};

export default DummyBox;
