import { NavLink } from "react-router-dom";
import AuthContext from "../store/AuthContext";
import { useContext } from "react";
import Swal from 'sweetalert2'

const Header = () => {
  const { logout, token } = useContext(AuthContext);
  

  // // const logoutAlert = () => {
  //   Swal.fire({
  //     title: 'Are you sure you want to logout?',
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#000000',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, Logout!'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       Swal.fire(
  //         'You have logged out!',
  //       )
  //     }
  //   })
  // // }

  return (
    <header><h1 id="siteTitle">MovieQueue</h1>
    <nav>
      {token && (
        <>
          <NavLink to="/home" className="menubtn">Home</NavLink>
          <NavLink to="/frienddetail" className="menubtn">FriendDetail</NavLink>
          <button onClick={() => logout()} className="menubtn" >Logout</button>
        </>
      )}
    </nav>
      </header>
  );
};

export default Header;
