import { useState } from "react";

export default function SignUp() {

  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [userpassword, setUserPassword] = useState("");

  const setForm = () => {
    
    setUserPassword("");
  };

  return (
    <div className="signupMain">
      <h2>Login</h2>
      <form>
        <input
          placeholder="Username / Email"
          type="text"
          value={usernameOrEmail}
          onChange={(e) => setUsernameOrEmail(e.target.value)}
        />
        <br />
        <input
          placeholder="Password"
          type="password"
          value={userpassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <br />
      </form>
      <br />
      <button onClick={() => setForm()}>Login</button>
    </div>
  );
}
