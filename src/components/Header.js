const headerStyle = {
  fontFamily: '"Baskerville Old Face", serif',
  fontWeight: 100,
  fontSize: "64px",
  textAlign: "center",
  color: "#a10000",
};

const Header = () => (
  <header className="text-center py-4 mt-1 border-bottom">
    <h1 className="display-4" style={headerStyle}>
      REEL<span className="text-dark">NEWS</span>
    </h1>
  </header>
);
export default Header;
