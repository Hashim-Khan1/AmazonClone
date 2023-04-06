import { useState } from "react";
import Response from "../components/Response";

function Register() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="loginLogo"></div>
      <Response />

      <div className="formLoginContainer">
        <p id="formTitle">Create an account</p>
        <form className="column" action="#">
          <p className="label">Your name</p>
          <input
            className="formInpt"
            type="text"
            placeholder="First and Last name"
          />
          <p className="label">Email</p>
          <input className="formInpt" type="text" />
          <p className="label">Password</p>
          <input
            className="formInpt"
            type="password"
            placeholder="At least six characters"
          />
          <p className="label">Re-enter password</p>
          <input className="formInpt" type="password" />
          <input type="submit" className="loginBtn" value={"Continue"} />
        </form>
      </div>
      <div
        className="row alignItemsCenter"
        style={{ width: "350px", margin: "20px auto" }}
      >
        <div className="line"></div>
        <p
          style={{
            minWidth: "max-content",
            fontSize: "13px",
            margin: "0 15px",
          }}
        >
          New to Not amazon
        </p>
        <div className="line"></div>
      </div>
      <div className="greyGBtn">Create your not amazon account</div>
    </>
  );
}

export default Register;
