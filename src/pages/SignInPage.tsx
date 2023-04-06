import SignIn from "../layouts/SignIn";
import Register from "../layouts/Register";
function SignInPage() {
  return (
    <div id="container">
      <div id="response">
        <p id="repsoneTitle">Reponse message</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
          totam sunt officiis ab tenetur voluptas.
        </p>
      </div>
      <SignIn></SignIn>
      {/* <Register></Register> */}
    </div>
  );
}
export default SignInPage;
