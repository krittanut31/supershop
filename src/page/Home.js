import Nav from "../component/Nav";
import { exproduct1 } from "../data/ProductHome";

const Home = () => {
  // console.log(exproduct1);
  return (
    <div>
      <Nav />
      <div className="flex justify-center items-center bg-[url('https://cdn.shopify.com/s/files/1/1864/2187/files/Bite_Holiday_Content1109-16_9.jpg?quality=70')] bg-cover  w-full h-[83vh]">
        <div className=" m-auto h-[55%] w-[75%]">
          <div className="flex flex-col justify-between h-[80%] w-[50%] ml-6 -mt-2">
            <div className="flex  w-[100%] ">
              <p className=" text-7xl text-left font-[sans-serif] font-bold">
                The best things come in zero-waste packages.
              </p>
            </div>
            <div className=" w-[50%] h-auto flex   ">
              <button
                type=""
                className="my-8 py-2 px-6 border border-black rounded-full"
              >
                <p className="w-full h-full text-xl font-[sans-serif]">
                  Shop Gift Stes
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full h-[72vh] justify-center">
        <div className="mx-14 w-full h-[455] flex items-center">
          <div className="flex w-full  mx-8 my-auto">
            <div className="grid grid-cols-5 w-full space-x-6 mx-28  ">
              {/* {exproduct1.map((product) => (
                <div className="">
                  <div
                    className={`w-full h-[400px] bg-[url('${product.background}')] bg-cover bg-repeat rounded-xl  hover:bg-[url('${product.hoverbackground}')] `}
                  ></div>
                  <div>
                    <p className="font-[sans-serif] text-xl font-semibold">
                      {product.name}
                    </p>
                  </div>
                  <div>
                    <p className="font-[sans-serif] text-sm font-semibold text-slate-400">
                      FROM {product.price} /MONTH
                    </p>
                  </div>
                  <div className=" ">
                    <button
                      type=""
                      className="mt-5 py-1 px-4 border border-black rounded-full"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
