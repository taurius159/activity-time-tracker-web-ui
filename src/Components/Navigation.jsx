import { Link } from "react-router-dom";

function Navigation({ user, handleLogout }) {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {user && (
            <li>
              <Link to="/activityTimeTracker">Activity Time Tracker App</Link>
            </li>
          )}
          {user ? (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          {!user && (
            <li>
              <Link to="/register">Register</Link>
            </li>
          )}
        </ul>
      </nav>
      <h1>Activity Time Tracker</h1>
    </header>
  );
}

export default Navigation;
