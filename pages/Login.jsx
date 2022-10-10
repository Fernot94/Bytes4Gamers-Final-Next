import { useState } from "react";

export default function SignUp() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [username, setUserName] = useState("");
  const [userpassword, setUserPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const setForm = () => {
    setUser(username);
    setPassword(userpassword);
    setConfirmation(passwordConfirmation);
  };

  return (
    <div className="signupMain">
      <h2>Login</h2>
      <form>
        <input
          placeholder="Username"
          type="text"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
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
