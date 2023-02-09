import { NavLink } from "react-router-dom";
import AuthContext from "../store/AuthContext";
import { useContext } from "react";
import Swal from 'sweetalert2'

const Header = () => {
  const { logout, token } = useContext(AuthContext);
  

  const logoutAlert = () => {
    Swal.fire({
      title: 'Leaving So Soon?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#000000',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Logout!'
    }).then((result) => {
      if (result.isConfirmed) {
        logout()
        Swal.fire({
          title:'Successfully logged out.',
          showConfirmButton: false,
          timer: 1500,
      })
      }
    })
  }

  return (
    <header><h1 id="siteTitle">Movie Queue</h1>
    <nav>
      {token && (
        <>
          <NavLink to="/home" className="menubtn">Home</NavLink>
          {/* <NavLink to="/frienddetail" className="menubtn">FriendDetail</NavLink> */}
          <button onClick={() => logoutAlert()} className="menubtn" >Logout</button>
        </>
      )}
    </nav>
      </header>
  );
};

export default Header;
