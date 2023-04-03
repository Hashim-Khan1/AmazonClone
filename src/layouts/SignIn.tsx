import { useState } from "react";

function SignIn() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="loginLogo"></div>
      <div className="formLoginContainer">
        <p id="formTitle">Sign in</p>
        <form className="column" action="#">
          <p className="label">Email or mobile phone number</p>
          <input className="formInpt" type="text" />
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

export default SignIn;
