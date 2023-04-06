import SignIn from "../layouts/SignIn";
import Register from "../layouts/Register";
import Response from "../components/Response";

function SignInPage() {
  return (
    <div id="container">
      <Response />

      <SignIn></SignIn>

      {/* <Register></Register> */}
    </div>
  );
}
export default SignInPage;
