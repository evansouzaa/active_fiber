//import { ReactComponent as LogoDark } from "../assets/images/logos/adminpro.svg";
import logo from "../../assets/images/logo_fiberactive_03.png"
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="Logo" width={160}></img>
    </Link>
  );
};

export default Logo;
