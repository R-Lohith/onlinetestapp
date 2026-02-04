import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { signInWithGoogle } from "./firebase";
import "./App.css";
import logoImage from "./compents/new.png"; // Replace with your actual logo path

function Login() {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState("");
  const [usePhone, setUsePhone] = useState(false);

  // Hardcoded credentials (you can modify these)
  const VALID_CREDENTIALS = {
    username: "admin",
    password: "admin123"
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    const username = e.target.username.value;
    const password = e.target.password.value;

    // Check if fields are empty
    if (!username || !password) {
      setError("Please fill all fields");
      return;
    }

    // Validate credentials
    if (username === VALID_CREDENTIALS.username && password === VALID_CREDENTIALS.password) {
      // Successful login
      setError("");
      navigate("/dashboard");
    } else {
      // Invalid credentials
      setError("Invalid username or password");
    }
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (usePhone) {
      const phone = e.target.phone.value;
      // const password = e.target.password.value;

      if (!phone) {
        setError("Please fill all fields");
        return;
      }

      if (phone.length < 10) {
        setError("Please enter a valid phone number");
        return;
      }

      // Successful signup
      alert("Account created successfully!");
      navigate("/dashboard");
    } else {
      const username = e.target.username.value;
      const email = e.target.email.value;
      const password = e.target.password.value;

      if (!username || !email || !password) {
        setError("Please fill all fields");
        return;
      }

      // Successful signup
      alert("Account created successfully!");
      navigate("/dashboard");
    }
  };
const handleGoogleLogin = async () => {
  try {
    const user = await signInWithGoogle();
    const email = user.email;

    // ✅ Domain check
    if (!email.endsWith("@bitsathy.ac.in")) {
      await signOut(auth);
      alert("Only @bitsathy.ac.in accounts are allowed");
      return;
    }

    // ✅ Allowed user
    navigate("/dashboard");

  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

  const handleToggle = () => {
    setIsSignup(!isSignup);
    setError("");
    setUsePhone(false);
  };

  const togglePhoneAuth = () => {
    setUsePhone(!usePhone);
    setError("");
  };

  return (
    <div className="page-container">
      {/* Logo in top-left corner */}
      <div className="page-logo">
        <img src={logoImage} alt="Logo" />
      </div>

      {/* Page Title */}
      <div className="page-title">{isSignup ? "" : ""}</div>

      {/* Top Grid (White) */}
      <div className="grid-top"></div>

      {/* Bottom Grid (Blue) */}
      <div className="grid-bottom"></div>

      {/* Center Container with Login/Signup and Welcome panels */}
      <div className={`center-panels ${isSignup ? 'flipped' : ''}`}>
        {/* Left Panel - Changes based on isSignup */}
        <div className="panel-left">
          {!isSignup ? (
            // LOGIN FORM
            <div className="form-panel">
              <div className="decorative-wave"></div>
              
              <div className="form-content">
                <h2>Log in</h2>

                <form onSubmit={handleLoginSubmit}>
                  {error && <div className="error-message">{error}</div>}
                  
                  <input 
                    type="text" 
                    name="username" 
                    placeholder="user name" 
                    required 
                  />

                  <input 
                    type="password" 
                    name="password" 
                    placeholder="password" 
                    required 
                  />
                  <div><span>
                  <div className="forgot-password">
                    Forgot your <a href="#forgot">password?</a>
                  </div></span>
                  </div>

                  <button type="submit" className="auth-btn">
                    Log in
                  </button>
                </form>

                <div className="divider">
                  <span>OR</span>
                </div>

                <button className="google-btn" onClick={handleGoogleLogin}>
                  <FcGoogle size={20} />
                  Continue with Google
                </button>
                

                <div className="toggle-link">
                  Don't have any account? <span onClick={handleToggle}>Sign Up</span>
                </div>
              </div>
            </div>
          ) : (
            // WELCOME SECTION (when signup is active, welcome moves to left)
            <div className="welcome-panel">
              <div className="welcome-content">
                <h1>WELCOME !</h1>
                <p>Sign up to get started</p>
              </div>
            </div>
          )}
        </div>

        {/* Right Panel - Changes based on isSignup */}
        <div className="panel-right">
          {!isSignup ? (
            // WELCOME SECTION (when login is active)
            <div className="welcome-panel">
              <div className="welcome-content">
                <h1>WELCOME !</h1>
                <p>Log in to continue</p>
              </div>
            </div>
          ) : (
            // SIGNUP FORM
            <div className="form-panel signup-form">
              <div className="decorative-wave"></div>
              
              <div className="form-content">
                <h2>Sign Up</h2>

                {!usePhone ? (
                  // Email Signup Form
                  <form onSubmit={handleSignupSubmit}>
                    {error && <div className="error-message">{error}</div>}
                    
                    <input 
                      type="text" 
                      name="username" 
                      placeholder="user name" 
                      required 
                    />


                    <input 
                      type="password" 
                      name="password" 
                      placeholder="password" 
                      required 
                    />

                    <button type="submit" className="auth-btn">
                      Sign Up
                    </button>
                  </form>
                ) : (
                  // Phone Signup Form
                  <form onSubmit={handleSignupSubmit}>
                    {error && <div className="error-message">{error}</div>}
                    
                    <div className="phone-input-container">
                      <select className="country-code">
                        <option value="+1">+1</option>
                        <option value="+91">+91</option>
                        <option value="+44">+44</option>
                        <option value="+86">+86</option>
                        <option value="+81">+81</option>
                      </select>
                      <input 
                        type="tel" 
                        name="phone" 
                        placeholder="phone number" 
                        required 
                        className="phone-input"
                      />
                    </div>

                    {/* <input  */}
                      {/* type="password" 
                      name="password" 
                      placeholder="password" 
                      required  */}
                    {/* /> */}

                    <button type="submit" className="auth-btn">
                      Sign Up
                    </button>
                  </form>
                )}

                <div className="divider">
                  <span>OR</span>
                </div>

                <button className="google-btn" onClick={handleGoogleLogin}>
                  <FcGoogle size={20} />
                  Continue with Google
                </button>

                {/* <button className="phone-btn" onClick={togglePhoneAuth}>
                  <span className="phone-icon">📱</span>
                  {usePhone ? "Use Email Instead" : "Continue with Phone Number"}
                </button> */}

                <div className="toggle-link">
                  Already have an account? <span onClick={handleToggle}>Log In</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;