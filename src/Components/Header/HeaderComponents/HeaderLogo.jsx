import { Link } from "react-router-dom";
import Logo from "../../../../public/images/Logo/logo.png.webp";

export const HeaderLogo = () => {
  return (
    <>
      <Link to={"/"} style={{ display: "flex" }}>
        <img src={Logo} alt="Logo image" />
      </Link>
    </>
  );
};
