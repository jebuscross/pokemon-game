import MenuHeader from "../../Components/MenuHeader";

const ContactPage = ({ onChangePage }) => {
  const handleClick = () => {
    onChangePage && onChangePage("app");
  };
  return (
    <>
      <div>
        This is Contact Page
        <button onClick={handleClick}>Home Page</button>
      </div>
      <MenuHeader />
    </>
  );
};

export default ContactPage;
