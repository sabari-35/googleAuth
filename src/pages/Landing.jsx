import GoogleLoginButton from "../components/GoogleLoginButton";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-card">
        <h1>🚀 Welcome to GoogleAuth</h1>
        <p>Login securely using your Google account</p>
        <GoogleLoginButton />
      </div>
    </div>
  );
};

export default Landing;
