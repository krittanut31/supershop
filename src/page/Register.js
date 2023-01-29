import { Link } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const [errorName, setErrorName] = useState("hidden");
  const [errorLastname, setErrorLastname] = useState("hidden");
  const [errorEmail, setErrorEmail] = useState("hidden");
  const [errorUsername, setErrorUsername] = useState("hidden");
  const [errorPassword, setErrorPassword] = useState("hidden");
  const [errorRepassword, setErrorRepassword] = useState("hidden");

  const validate = (e) => {
    e.preventDefault();
    if (firstName.length > 0) {
      setErrorName("hidden");
    } else {
      setErrorName("");
    }
    if (lastName.length > 0) {
      setErrorLastname("hidden");
    } else {
      setErrorLastname("");
    }
    if (email.length > 0) {
      setErrorEmail("hidden");
    } else {
      setErrorEmail("");
    }
    if (username.length > 0) {
      setErrorUsername("hidden");
    } else {
      setErrorUsername("");
    }
    if (password.length > 0) {
      setErrorPassword("hidden");
    } else {
      setErrorPassword("");
    }
    if (repassword.length > 0) {
      setErrorRepassword("hidden");
    } else {
      setErrorRepassword("");
    }
  };

  return (
    <div className="flex mx-auto justify-center  bg-[#dce7ed]">
      <div className="felx w-[50rem] h-auto">
        <div className="flex flex-col m-10  p-10">
          <p className="text-center text-4xl font-bold font-[Arial]">
            Register
          </p>
          <form className="h-auto mt-2 p-3 " onSubmit={validate}>
            <div className="flex justify-between">
              <div>
                <p>Firt name</p>
                <input
                  type="text"
                  name=""
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="px-4 py-2 text-lg focus:outline-none "
                />
                <p className={`text-red-500 ${errorName}`}>
                  Invalid or empty name.
                </p>
              </div>
              <div>
                <p>Last name</p>
                <input
                  type="text"
                  name=""
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="px-4 py-2 text-lg focus:outline-none"
                />
                <p className={`text-red-500 ${errorLastname}`}>
                  Invalid or empty lastname.
                </p>
              </div>
            </div>
            <div className=" mt-3">
              <p>Email</p>
              <input
                type="text"
                name=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 text-lg focus:outline-none"
              />
              <p className={`text-red-500 ${errorEmail}`}>
                Please enter a valid email
              </p>
            </div>
            <div className="w-full mt-3">
              <p>Username</p>
              <input
                type="text"
                name=""
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 text-lg focus:outline-none"
              />
              <p className={`text-red-500 ${errorUsername}`}>
                Invalid or empty username.
              </p>
            </div>
            <div className="w-full mt-3">
              <p>Password</p>
              <input
                type="password"
                name=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 text-lg focus:outline-none"
              />
              <p className={`text-red-500 ${errorPassword}`}>
                Invalid or empty password.
              </p>
            </div>
            <div className="w-full mt-3">
              <p>Repassword</p>
              <input
                type="password"
                name=""
                value={repassword}
                onChange={(e) => setRepassword(e.target.value)}
                className="w-full px-4 py-2 text-lg focus:outline-none"
              />
              <p className={`text-red-500 ${errorRepassword}`}>
                Passwords do not match
              </p>
            </div>
            <div className="flex justify-center mt-10">
              <button
                type="submit"
                className="w-full py-2 px-3 bg-[#0aa2ee] border border-black rounded-full text-white"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
