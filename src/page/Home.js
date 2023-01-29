import { exproduct1 } from "../data/ProductHome";
import Card from "../component/Card";
import { Link, Navigate } from "react-router-dom";
import Footer from "../component/Footer";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.user);

  // null = false
  return (
    <div className="">
      <div className="flex justify-center items-center bg-[url('https://cdn.shopify.com/s/files/1/1864/2187/files/Bite_Holiday_Content1109-16_9.jpg?quality=70')] bg-cover  w-full h-[83vh]">
        <div className=" m-auto h-[55%] w-[75%]">
          <div className="flex flex-col justify-between h-[80%] w-[50%] ml-6 -mt-2">
            <div className="flex  w-[100%] ">
              <p className=" text-7xl text-left font-[sans-serif] font-bold">
                The best things come in zero-waste packages.
              </p>
            </div>
            <div className=" w-[50%] h-auto flex   ">
              <Link
                to="/collections/all"
                type=""
                className="my-8 py-2 px-6 border border-black rounded-full bg-black"
              >
                <p className="w-full h-full text-xl font-[sans-serif] text-white">
                  Shop Now
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full h-[66vh] justify-center">
        <div className="mx-14 w-full h-[455] flex items-center">
          <div className="flex justify-center w-full  mx-8 my-auto">
            <div className="grid grid-cols-5 w-auto gap-x-6  mx-28  ">
              {exproduct1.map((product) => (
                <div className="w-[280px] ">
                  <Card
                    bg={product.background}
                    hoverbg={product.hoverbackground}
                    name={product.name}
                    price={product.price}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[15vh] mt-6 flex justify-center">
        <div className="w-[94%] flex items-center ">
          <div className="mr-4 h-[5px] w-full bg-[#dce7ed] "></div>
          <Link
            to="/collections/all"
            className=" w-[650px] px-4 py-4 font-[sans-serif] text-center text-xl font-semibold border-2 border-black rounded-full bg-black text-white hover:bg-white hover:text-black   "
          >
            Shop All Product
          </Link>
          <div className="ml-4 h-[5px] w-full bg-[#dce7ed] "></div>
        </div>
      </div>
      <div className="flex flex-col justify-center bg-slate-500 mt-16 px-5 mx-auto w-[1400px] ">
        <div className="w-auto h-[570px] bg-gradient-to-b from-[#dce7ed] via-[#fff] to-[#dce7ed]  rounded-xl flex justify-center">
          <div className="h-full w-[85%] flex items-center">
            <div className="  w-full flex flex-col justify-center">
              <p className="font-[sans-serif] text-center font-semibold text-[77px] ">
                Meet Bite.
              </p>
              <p className="mt-8 font-[sans-serif] text-center text-[27px] font-medium w-[62%] self-center">
                We’re here to make daily routines better for your body and
                better for our planet — because small change can make a big
                impact.
              </p>
              <Link
                to="/collections/all"
                className="mt-10 self-center w-[300px] px-4 py-4 font-[sans-serif] text-center text-xl font-semibold border-2 border-black rounded-full bg-black text-white hover:bg-white hover:text-black   "
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 w-full h-[830px] bg-white flex ">
          <div className="flex justify-center items-end w-[50%] mx-4 rounded-xl bg-[url('https://cdn.shopify.com/s/files/1/1864/2187/files/homepage_giftcard_lowfocalpoint.jpg?height=1000&quality=70')] bg-cover bg-repeat bg-center ">
            <div className="mb-16 flex flex-col">
              <p className=" italic text-3xl font-[garamond-premier-pro] ">
                Here's to no guessing
              </p>
              <p className=" text-4xl font-[sans-serif] font-semibold mb-6">
                Digital Gift Cards
              </p>
              <Link
                to="/collections/all"
                className=" self-center w-[300px] px-4 py-4 font-[sans-serif] text-center text-xl font-semibold border-2 border-black rounded-full bg-black text-white hover:bg-white hover:text-black   "
              >
                Send A Gift
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-end w-[50%] mx-4 rounded-xl bg-[url('https://cdn.shopify.com/s/files/1/1864/2187/files/Bite_Kelp2_LO.jpg?height=1000&quality=70')] bg-cover bg-repeat bg-center">
            <div className="mb-16 flex flex-col">
              <p className="text-white italic text-3xl font-[garamond-premier-pro] text-center">
                Introducing
              </p>
              <p className="text-white text-4xl font-[sans-serif] font-semibold mb-6 w-[350px] text-center">
                Carbon Capture Cleanser
              </p>
              <Link
                to="/collections/all"
                className=" self-center w-[300px] px-4 py-4 font-[sans-serif] text-center text-xl font-semibold border-2 border-black rounded-full bg-black text-white hover:bg-white hover:text-black   "
              >
                Send A Gift
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-yellow-300 w-full h-[400px]">
          <div className=""></div>
        </div>
        <div className="mt-16 w-full h-[60rem] bg-white">
          <div className="h-[5rem] flex items-center">
            <div className="w-[170px]">
              <p className="text-center text-3xl font-semibold">Oral Care</p>
            </div>
            <div className="h-[5px] w-full bg-[#dce7ed] ml-6"></div>
          </div>
          <div className="h-[55rem]"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
