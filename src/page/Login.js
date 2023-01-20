import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [checkUsername, setCheckUsername] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const [usernameColor, setUsernameColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");

  const [errorUsername, setErrorUsername] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const Validate = (e) => {
    e.preventDefault();
    if (checkUsername.length > 8) {
      setUsernameColor("");
      setErrorUsername("");
    } else {
      setUsernameColor("red");
      setErrorUsername("Usernam or Email does not exist");
    }
    if (checkPassword.length > 8) {
      setPasswordColor("");
      setErrorPassword("");
    } else {
      setPasswordColor("red");
      setErrorPassword("password is incorrect");
    }
  };

  return (
    <div className="w-full   h-[100vh] bg-[#dce7ed]">
      <div className="flex   justify-center ">
        <div className="felx w-[35rem] h-auto">
          <div className="flex flex-col m-10 bg-white p-10">
            <p className="text-center text-4xl font-bold font-[Arial] ">
              Sign in
            </p>
            <form className=" h-auto mt-2 p-3 " onSubmit={Validate}>
              <div className="">
                <input
                  type="text"
                  name=""
                  value={checkUsername}
                  onChange={(e) => setCheckUsername(e.target.value)}
                  className=" py-2 text-lg w-full  border border-slate-400 focus:outline-none px-4  rounded-md"
                  placeholder="Usernam/Email"
                />
                <p className={`text-sm  text-${usernameColor}-500 `}>
                  {errorUsername}
                </p>
              </div>
              <div className="mt-2">
                <input
                  type="text"
                  name=""
                  value={checkPassword}
                  onChange={(e) => setCheckPassword(e.target.value)}
                  className=" py-2 text-lg w-full  border border-slate-400 focus:outline-none px-4 rounded-md"
                  placeholder="Password"
                />
                <p className={`text-sm  text-${passwordColor}-500 `}>
                  {errorPassword}
                </p>
              </div>
              <div className=" flex justify-center mt-8">
                <button
                  type="submit"
                  className="border border-black px-3 py-1 w-full rounded-full "
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
