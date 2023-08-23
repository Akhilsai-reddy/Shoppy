import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserActions from "./USERACTIONS/UserActions";
import { userContext } from "./USERCONTEXT/UserContext";

const Navbar = () => {
  const { user } = useContext(userContext);
  const quantity=useSelector((state)=>state.cart.totalQuantity)
  const name = user &&user.FirstName

  const logout = () => {
    if (window.confirm("do you want to logout?")) {
      UserActions.logoutUser();
      window.location.replace('/')
    }
  };
  return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-info bg-info text-white">
        <div className="container-fluid">
          <b className="navbar-brand text-dark text-white"> LET'S SHOP</b>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-disabled="false"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link text-dark">
                  <b>Home</b>
                </Link>
              </li>
              <li className="nav-item"></li>
            </ul>
            <ul>
            </ul>
            <form className="d-flex">
           <> {user ? (
              <b>
                  <i className="bi bi-person-circle"/> Hello {name} &nbsp;
                <button
                  className="btn btn-danger btn-sm text-white"
                  onClick={(e) => logout(e)}
                >
                  log out?
                </button>
              </b>
            ) : (
              <Link to="/login">
                <b>LOGIN</b>
              </Link>
            )}</>
           &nbsp;<Link to='/cart' className="btn btn-success btn-sm">Cart {quantity}</Link>
            </form>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
