import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../slice/user";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameColor, setUsernameColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");

  const [errorUsername, setErrorUsername] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  //if (user.id) return <Navigate to="/"></Navigate>;

  const validate = () => {
    if (username.length >= 8 && password.length >= 8) {
      dispatch(
        setCredentials({
          id: 1,
          username: username,
          email: "admin@email.com",
          profileImage: "ssss,",
          token: "SSDADCXXDRR",
        })
      );
    } else {
      setUsernameColor("red");
      setErrorUsername("Usernam or Email does not exist");
      setPasswordColor("red");
      setErrorPassword("password is incorrect");
    }
  };

  const login = () => {
    axios
      .post("/api/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response);
        // console.log(response.data.token);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="w-full   h-[100vh] bg-[#dce7ed]">
      <div className="flex   justify-center ">
        <div className="felx w-[35rem] h-auto">
          <div className="flex flex-col m-10 bg-white p-10">
            <p className="text-center text-4xl font-bold font-[Arial] ">
              Sign in
            </p>
            <div className=" h-auto mt-2 p-3 ">
              <div className="">
                <input
                  type="text"
                  name=""
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className=" py-2 text-lg w-full  border border-slate-400 focus:outline-none px-4  rounded-md"
                  placeholder="Username/Email"
                />
                <p className={`text-sm  text-${usernameColor}-500 `}>
                  {errorUsername}
                </p>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  name=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className=" py-2 text-lg w-full  border border-slate-400 focus:outline-none px-4 rounded-md"
                  placeholder="Password"
                />
                <p className={`text-sm  text-${passwordColor}-500 `}>
                  {errorPassword}
                </p>
              </div>
              <div className=" flex justify-center mt-8">
                <button
                  type="button"
                  className="border border-black px-3 py-1 w-full rounded-full "
                  onClick={() => {
                    validate();
                    login();
                  }}
                >
                  <p className="text-slate-600 text-xl">Sign in</p>
                </button>
              </div>
              <div className="mt-5 flex justify-center">
                <p>or</p>
              </div>
              <div className="mt-5 flex justify-center">
                <Link
                  to="/register"
                  className="w-full border border-slate-200 px-3 py-1  rounded-full bg-[#2599cf] "
                >
                  <p className="text-center text-white">Register</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
