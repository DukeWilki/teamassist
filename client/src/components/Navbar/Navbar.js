import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useAppContext } from "../../store";
import { setUserLogout } from "../../actions";

function Navbar() {
  const history = useHistory();
  const [state, dispatch] = useAppContext();

  const handleLogOut = (e) => {
    e.preventDefault();
    setUserLogout(dispatch);
    history.push("/login");
  };

  // console.log({ state });

  const loginRegLink = (
    <ul className="navbar-nav list-group list-group-horizontal">
      <p>
        <Link className="mb-1 mr-1 button-nav btn btn-sm active" to="/login">
          Login
        </Link>
      </p>
      <p>
        <Link className="button-nav btn tn-sm active" to="/register">
          Register
        </Link>
      </p>
    </ul>
  );
  const userLink = (
    <ul className="navbar-nav list-group list-group-horizontal">
      <p>
        <Link className="mb-1 mr-1 button-nav btn btn-sm active" to="/">
          Home
        </Link>
      </p>
      <p>
        <button
          className="btn btn-sm active"
          id="logoutBtn"
          data-toggle="modal"
          data-target="#logoutModal"
          onClick={handleLogOut}
        >
          <div>Logout</div>
        </button>
      </p>
    </ul>
  );
  return (
    <nav className="navbar navbar-expand-lg">
      <div
        className="collapse navbar-collapse d-flex justify-content-end"
        id="navbar1"
      >
        {state.isAuthenticated ? userLink : loginRegLink}
      </div>
    </nav>
  );
}

export default Navbar;
