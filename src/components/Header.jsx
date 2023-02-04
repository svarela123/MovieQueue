import { NavLink } from "react-router-dom";
import AuthContext from "../store/AuthContext";
import { useContext } from "react";

const Header = () => {
  const { logout, token } = useContext(AuthContext);
  return (
    <nav>
      {token && (
        <>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/frienddetail">FriendDetail</NavLink>
          <button onClick={() => logout()}>Logout</button>
        </>
      )}
    </nav>
  );
};

export default Header;
