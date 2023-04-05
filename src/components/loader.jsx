import HexagonWithLetter from "./HexagonWithLetter";

function Loader() {
  return (
    <div className="loader">
      <HexagonWithLetter color="var(--signature)" size="100px" delay="0.01s" />
    </div>
  );
}

export default Loader;
