const GamePage = ({ onClickButton }) => {
  const handleClick = () => {
    onClickButton && onClickButton("app");
  };
  return (
    <div>
      This is Game Page
      <button onClick={handleClick}>Home Page</button>
    </div>
  );
};

export default GamePage;
