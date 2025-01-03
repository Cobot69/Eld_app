import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './AuthForm.css';


const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    usernameOrPhone: "",
    password: "",
    username: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateLogin = () => {
    const newErrors = {};
    if (!formData.usernameOrPhone.trim()) {
      newErrors.usernameOrPhone = "Username or phone is required";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateRegister = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Phone number must contain only digits";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin && !validateLogin()) return;
    if (!isLogin && !validateRegister()) return;

    try {
      const url = isLogin
        ? "http://localhost:5000/login"
        : "http://localhost:5000/register";
      const body = isLogin
        ? {
            usernameOrPhone: formData.usernameOrPhone,
            password: formData.password,
          }
        : {
            username: formData.username,
            phone: formData.phone,
            password: formData.password,
          };

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message || "Operation successful");
        setFormData({
          usernameOrPhone: "",
          password: "",
          username: "",
          phone: "",
        });

        if (isLogin) {
          // Redirect to home page on successful login
          localStorage.setItem("user", JSON.stringify(data.user || {})); // Save user details
          navigate("/");
        }
      } else {
        setErrors({ server: data.error || "An error occurred" });
      }
    } catch (error) {
      setErrors({ server: "Error connecting to the server" });
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>{isLogin ? "Login" : "Register"}</h2>
        {!isLogin && (
          <>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              {errors.username && <p className="error-text">{errors.username}</p>}
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="error-text">{errors.phone}</p>}
            </div>
          </>
        )}
        {isLogin && (
          <div className="form-group">
            <label>Username/Phone</label>
            <input
              type="text"
              name="usernameOrPhone"
              value={formData.usernameOrPhone}
              onChange={handleChange}
            />
            {errors.usernameOrPhone && (
              <p className="error-text">{errors.usernameOrPhone}</p>
            )}
          </div>
        )}
        <div className="form-group password-group">
          <label>Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <span
              className="password-toggle"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "🙈" : "👁"}
            </span>
          </div>
          {errors.password && <p className="error-text">{errors.password}</p>}
        </div>
        {errors.server && <p className="error-text server">{errors.server}</p>}
        {message && <p className="success-text">{message}</p>}
        <button type="submit" className="submit-btn">
          {isLogin ? "Login" : "Register"}
        </button>
        <p>
          {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Register" : "Login"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default AuthForm;
