import "./singUp.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
function SingUp() {
  const [form, setForm] = useState({
    First_Name: "",
    Last_Name: "",
    Email: "",
    Password: "",
  });
  const navigate = useNavigate();

  const SubmitHand = (e) => {
    e.preventDefault();
    if (
      form.Password === "" ||
      !/[a-zA-Z]/.test(form.Password) ||
      form.Email === "" ||
      !/[a-zA-Z]/.test(form.Email) ||
      form.Last_Name === "" ||
      !/[a-zA-Z]/.test(form.Last_Name) ||
      form.First_Name === "" ||
      !/[a-zA-Z]/.test(form.First_Name)
    ) {
      alert("You must not leave any fields empty");
    } else {
      localStorage.setItem("FormLocalStorage", JSON.stringify(form));
      localStorage.setItem("First_Name", JSON.stringify(form.First_Name));
      localStorage.setItem("issuccess", true);
      localStorage.setItem("welcome", true);
      navigate("/");
    }
  };

  return (
    <>
      <div className="container_SingUp">
        <div className="Form_Singup">
          <form onSubmit={SubmitHand}>
            <div className="SingUp_input">
              <label for="First_Name">First Name</label>
              <input
                onInput={(e) => {
                  <h1>dsadasdada</h1>;
                }}
                value={form.First_Name}
                onChange={(e) =>
                  setForm({ ...form, First_Name: e.target.value })
                }
                type="text"
                id="First_Name"
                placeholder="Enter First name"
              />
            </div>
            <div className="SingUp_input">
              <label for="Last_Name">Last Name</label>
              <input
                value={form.Last_Name}
                onChange={(e) =>
                  setForm({ ...form, Last_Name: e.target.value })
                }
                type="text"
                id="Last_Name"
                placeholder="Enter Last name"
              />
            </div>
            <div className="SingUp_input">
              <label for="Email">Email</label>
              <input
                value={form.Email}
                onChange={(e) => {
                  setForm({ ...form, Email: e.target.value });
                }}
                type="email"
                id="Email"
                placeholder="Enter Email"
              />
            </div>
            <div className="SingUp_input">
              <label for="Password">Password</label>
              <input
                type="Password"
                id="Password"
                placeholder="Enter Password"
                value={form.Password}
                onChange={(e) => setForm({ ...form, Password: e.target.value })}
              />
            </div>
            <div className="SingUp_input">
              <input className="submit" type="submit" value="SingUp" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SingUp;
