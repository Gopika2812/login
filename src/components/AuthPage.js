import { signInWithPopup } from "firebase/auth";
import { auth, facebookProvider, googleProvider } from "../firebase";

import "./SignIn.css";

const SignIn = () => {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      alert(`Logged in as: ${result.user.email}`);
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      alert(`Logged in as: ${result.user.email}`);
    } catch (error) {
      console.error("Facebook login error:", error);
    }
  };

  return (
    <div className="container">
      <div className="left">
        <div className="top-row">
          <div className="brand">ELite <span>Memon</span></div>
          <p className="subtext">HAVE AN ACCOUNT? SIGN IN</p>
        </div>
        <h2 className="headline">
          SIGN IN TO YOUR <br /><span>ADVENTURE!</span>
        </h2>
      </div>

      <div className="right">
        <h1>SIGN IN</h1>
        <p>Sign in with email address</p>
        <input type="email" placeholder="Yourname@gmail.com" />
        <button className="signup-btn">Sign up</button>
        <div className="divider"></div>        
        <p>Or continue with</p>
        <div className="socials">
          <button className="social google" onClick={handleGoogleLogin}>
            <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="Google" />
            Google
          </button>
          <button className="social facebook" onClick={handleFacebookLogin}>
            <img src="https://img.icons8.com/color/24/000000/facebook-new.png" alt="Facebook" />
            Facebook
          </button>
        </div>

        <p className="terms">
          By registering you with our <span>Terms and Conditions</span>
        </p>
  
    </div>
    <div className="foot">
        <p className="text">Copyright by ELite Memon</p>
    </div>
    </div>
  );
};

export default SignIn;
