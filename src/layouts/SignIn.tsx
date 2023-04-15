import { useState } from "react";
import Response from "../components/Response";
import axios from "axios";
import Cookies from "js-cookie";

function SignIn(props: any) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [response, setResponse] = useState(null);

  const submitForm = async (e: any) => {
    e.preventDefault();
    console.log(formData);
    try {
      const result = await axios.post(
        "http://localhost:3000/user/login",
        formData
      );
      setResponse(result.data);
      Cookies.set("AccessToekn", result.data.accessToken);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((values) => ({
      ...values,
      [name]: value,
    }));
  };
  const changeForm = () => {
    props.onChildData("Register");
  };
  return (
    <>
      <div id="loginLogo"></div>
      {response !== null ? (
        <Response
          message={`${response.message}`}
          title={`${response.title}`}
          colour={`${response.color}`}
        />
      ) : (
        ""
      )}

      <div className="formLoginContainer">
        <p id="formTitle">Sign in</p>
        <form className="column" action="#" onSubmit={submitForm}>
          <p className="label">Email or mobile phone number</p>
          <input
            className="formInpt"
            type="text"
            name="username"
            onChange={handleChange}
            value={formData.username || ""}
          />
          <p className="label">Password</p>
          <input
            className="formInpt"
            type="password"
            name="password"
            onChange={handleChange}
            value={formData.password || ""}
          />
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
      <div className="greyGBtn" onClick={changeForm}>
        Create your not amazon account
      </div>
    </>
  );
}

export default SignIn;
