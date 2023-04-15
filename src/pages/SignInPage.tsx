import { useState } from "react";
import SignIn from "../layouts/SignIn";
import Register from "../layouts/Register";

function SignInPage() {
  const [forms, setForms] = useState("Login");
  const handleChildData = (formData: any) => {
    setForms(formData);
  };
  return (
    <div id="container">
      {forms == "Login" ? (
        <SignIn onChildData={handleChildData} />
      ) : (
        <Register onChildData={handleChildData} />
      )}
    </div>
  );
}
export default SignInPage;
