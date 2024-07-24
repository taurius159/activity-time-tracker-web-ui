import { Navigate } from "react-router-dom";

function Login({ user, handleLogin }) {
  if (!user)
    return (
      <div>
        <button onClick={handleLogin}>Log in</button>
      </div>
    );
  else {
    return <Navigate to="/activityTimeTracker" replace />;
  }
}

export default Login;
