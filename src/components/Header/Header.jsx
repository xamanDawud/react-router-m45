import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About Us</Link>
        <Link to={"/blog"}>Blog</Link>
      </ul>
    </div>
  );
};

export default Header;
