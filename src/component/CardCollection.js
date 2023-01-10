const Cardcollection = ({ name, price, type, reviews, bg }) => {
  return (
    <div>
      <div
        className="w-[full] h-[400px]  bg-cover bg-repeat bg-center rounded-xl"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <div className="flex justify-between">
        <div>
          <p className="font-[sans-serif] text-xl font-semibold mt-2">{name}</p>
          <p>{type}</p>
        </div>
        <div>
          <p className="font-[sans-serif] text-xl font-semibold mt-2">
            {price}
          </p>
        </div>
      </div>
      <div>
        <p className="font-[sans-serif] text-sm font-semibold text-slate-400">
          {reviews}
        </p>
      </div>
    </div>
  );
};

export default Cardcollection;
