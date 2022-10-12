import { useState } from "react";
import { useRouter } from "next/router";
export default function SignUp() {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [userpassword, setUserPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const router = useRouter();

  const setForm = () => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        usernameOrEmail: usernameOrEmail,
        password: userpassword,
      }),
    };

    fetch("/api/login", options)
      .then((response) => response.json())
      .then((response) => handleLogin(response))
      .catch((err) => console.error(err));

    setUserPassword("");
  };

  const handleLogin = (response) => {
    if (response.message === undefined) {
      localStorage.setItem("token", response.token);
      return router.push("/home");
    }
    return setLoginError(response.message);
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
      {loginError !== "" && <p>{loginError}</p>}
    </div>
  );
}

// export const isLogged = () => {
//   localStorage.length >= 1;
// };
