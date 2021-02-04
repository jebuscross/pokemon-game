import MenuHeader from "../../Components/MenuHeader";

const AboutPage = ({ onChangePage }) => {
  const handleClick = () => {
    onChangePage && onChangePage("app");
  };
  return (
    <>
      <div>
        This is About Page
        <button onClick={handleClick}>Home Page</button>
      </div>
      <MenuHeader />
    </>
  );
};

export default AboutPage;
