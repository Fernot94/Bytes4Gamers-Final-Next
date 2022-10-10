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
      <h2>Create an Account</h2>
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
        <input
          placeholder="Confirm Password"
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <br />
        <input
          type="checkbox"
        />
        <label> I accept the terms of Bytes4Gamers.</label>
        <br/>
        <input
          type="checkbox"
        />
        <label> I want to receive publicity by email from Bytes4Gamers.</label>
        <br/>
        <br />
      </form>
      <button onClick={() => setForm()}>Register</button>
      <p>
        User: {user} <br />
        Password: {password} <br />
        Confirmation: {confirmation}
      </p>
    </div>
  );
}
