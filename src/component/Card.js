import { useState } from "react";

const Card = ({ bg, hoverbg, price, name }) => {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const imageStyle = {
    backgroundImage: isHover ? `url(${hoverbg})` : `url(${bg})`,
  };

  return (
    <div>
      <div
        className="w-[full] h-[400px]  bg-cover bg-repeat bg-center rounded-3xl"
        style={imageStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></div>
      <div>
        <p className="font-[sans-serif] text-xl font-semibold mt-6">{name}</p>
      </div>
      <div>
        <p className="font-[sans-serif] text-sm font-semibold text-slate-400">
          FROM {price} /MONTH
        </p>
      </div>
      <div className=" ">
        <button
          type=""
          className="mt-5 py-1 px-4 border border-black rounded-full w-[50%] "
        >
          <p className="font-semibold">Shop Now</p>
        </button>
      </div>
    </div>
  );
};

export default Card;
