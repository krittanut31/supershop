import { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";

const About = () => {
  const [navAbout, setNavAbout] = useState(false);
  const toggleNavAbout = () => {
    setNavAbout(!navAbout);
  };
  return (
    <div
      className={`flex  h-full w-full fixed top-0 ${
        navAbout ? "left-0 " : "left-[-100%] "
      }`}
    >
      <div
        className={`flex flex-col bg-blue-200 w-[30rem] h-full absolute  top-0  z-10 `}
      >
        <div className="my-auto h-auto">
          <MdKeyboardArrowLeft
            onClick={toggleNavAbout}
            className="text-3xl border border-black absolute top-3 right-3 rounded-full"
          />
          <div className="space-y-2 ml-10">
            <Link to="contact" onClick={toggleNavAbout}>
              <p>Contact</p>
            </Link>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
          </div>
        </div>
      </div>
      <div
        className=" felx w-full h-full relative z-0 bg-slate-200 opacity-60  "
        onClick={toggleNavAbout}
      ></div>
    </div>
  );
};
export default About;
