import MenuHeader from "../../Components/MenuHeader";

const GamePage = ({ onChangePage }) => {
  const handleClick = () => {
    onChangePage && onChangePage("app");
  };
  return (
    <>
      <div>
        This is Game Page
        <button onClick={handleClick}>Home Page</button>
      </div>
      <MenuHeader />
    </>
  );
};

export default GamePage;
