const Cardcollection = ({ name, price, type, reviews, bg }) => {
  return (
    <div>
      <div
        className="flex   w-[full] h-[400px]  bg-cover bg-repeat bg-center rounded-xl"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="  flex w-full h-full justify-center mt-6 items-end hover:-translate-y-6 transition hover:delay-100 hover:duration-200 ease-in-out cursor-pointer hover:backdrop-blur-[2px]">
          <button className="  absolute  -z-50 mb-10 border-2 border-black rounded-2xl py-2 px-6 bg-black text-white hover:bg-white hover:text-black text-xl font-medium">
            Add To Cart
          </button>
        </div>
      </div>
      <div className="flex justify-between bg-white static z-300">
        <div>
          <p className="font-[sans-serif] text-xl font-semibold mt-2">{name}</p>
          <p className="font-[sans-serif] italic ">{type}</p>
        </div>
        <div>
          <p className="font-[sans-serif] text-xl font-semibold mt-2">
            {price}
          </p>
        </div>
      </div>
      <div>
        <p className="font-[sans-serif] text-sm font-semibold text-slate-400 static z-30">
          Reviews {reviews}
        </p>
      </div>
    </div>
  );
};

export default Cardcollection;
