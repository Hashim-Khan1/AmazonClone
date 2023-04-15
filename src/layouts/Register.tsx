import { useState } from "react";
import Response from "../components/Response";
import axios from "axios";

function Register(props: any) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [response, setResponse] = useState(null);

  const submitForm = async (e: any) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        "http://localhost:3000/user/create-user",
        formData
      );

      setResponse(result.data);
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
    props.onChildData("Login");
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
        <p id="formTitle">Create an account</p>
        <form className="column" action="#" onSubmit={submitForm}>
          <p className="label">Email</p>
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
            placeholder="At least six characters"
            name="password"
            onChange={handleChange}
            value={formData.password || ""}
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
      <div className="greyGBtn" onClick={changeForm}>
        Have an account? Sign in
      </div>
    </>
  );
}

export default Register;
