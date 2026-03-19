import "./index.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { API } from "./global";
export function Login() {

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  // ✅ HANDLE INPUT CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
    validate(name, value);
  };

  // ✅ VALIDATION
  const validate = (name, value) => {
    let newErrors = { ...errors };

    if (name === "email") {
      if (!value.includes("@")) {
        newErrors.email = "Enter a valid email";
      } else {
        delete newErrors.email;
      }
    }

    if (name === "password") {
      if (value.length < 6) {
        newErrors.password = "Password must be at least 6 characters";
      } else {
        delete newErrors.password;
      }
    }

    setErrors(newErrors);
  };

  // ✅ SUBMIT (CONNECTED TO BACKEND)
  const handleSubmit = (e) => {
    e.preventDefault();

    // ❌ if validation errors
    if (Object.keys(errors).length !== 0) {
      alert("Please fix errors ❌");
      return;
    }

    // ✅ CALL BACKEND API
    fetch(`${API}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: form.email,
        password: form.password
      })
    })
      .then((res) => res.json())
      .then((data) => {

        if (data.message === "Login successful") {
          alert("Login Successful ✅");

          // ✅ SAVE USER
          localStorage.setItem("user", JSON.stringify(data.user));

          console.log("User:", data.user);

        navigate("/"); 

        } else {
          alert(data.message);
        }

      })
      .catch((err) => {
        console.error(err);
        alert("Server error ❌");
      });
  };

  return (
    <div className="login-container">

      <form className="login-form" onSubmit={handleSubmit}>

        <h2>Login</h2>

        <input
          type="text"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
        />

        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={handleChange}
        />

        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit">Login</button>

      </form>

    </div>
  );
}

