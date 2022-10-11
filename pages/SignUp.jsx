import { useState } from "react";

export default function SignUp() {

  const [username, setUserName] = useState("");
  const [email, setUserEmail] = useState("");
  const [userpassword, setUserPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [terms, setTerms] = useState(false);
  const [communication, setCommunication] = useState(false);

  const setForm = () => {
    console.log(terms)
    console.log(communication)
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({username: username, email: email,password: userpassword,passwordConfirmation: passwordConfirmation,acceptsTerms: terms,acceptsCommunications: communication})
    };

    fetch('http://localhost:3000/api/signup', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));

    setUserPassword("")
    setPasswordConfirmation("")
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
          placeholder="Email"
          type="text"
          value={email}
          onChange={(e) => setUserEmail(e.target.value)}
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
          onChange={(e) => setTerms(e.target.checked)}
        />
        <label> I accept the terms of Bytes4Gamers.</label>
        <br />
        <input
          type="checkbox"
          onChange={(e) => setCommunication(e.target.checked)}
        />
        <label> I want to receive publicity by email from Bytes4Gamers.</label>
        <br />
        <br />
      </form>
      <button onClick={() => setForm()}>Register</button>
    </div>
  );
}
