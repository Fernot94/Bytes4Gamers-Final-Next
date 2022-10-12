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
      <div className="box">
        <form autoComplete="off">
          <h2>Login</h2>
          <div className="inputBox">
            <input
              type="text"
              value={usernameOrEmail}
              onChange={(e) => setUsernameOrEmail(e.target.value)}
            />
            <span>Username / Email</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              type="password"
              value={userpassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
            <span>Password</span>
            <i></i>
          </div>
          <div class="links">
            <a href="#">Forgot Password ?</a>
            <a href="#">Signup</a>
          </div>
          <input className="inputLogin" value={"Login"} type={"submit"} onClick={() => setForm()}></input>
        </form>
      </div>
    </div>
  );
}
