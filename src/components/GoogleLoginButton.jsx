import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

const GoogleLoginButton = () => {
  const navigate = useNavigate();

  const handleSuccess = async (credentialResponse) => {
    try {
      console.log("Google credential received");

      const res = await axios.post(
        `${API_URL}/api/auth/google`,
        {
          token: credentialResponse.credential,
        },
        {
          withCredentials: true, // future-proof (cookies)
        }
      );

      console.log("Backend response:", res.data);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // ✅ GUARANTEED navigation
      window.location.href = "/success";

    } catch (err) {
      console.error("Login error:", err);
      alert("Google login failed");
    }
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={() => {
        console.error("Google login popup failed");
      }}
      useOneTap={false}
    />
  );
};

export default GoogleLoginButton;
