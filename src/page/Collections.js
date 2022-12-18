import Nav from "../component/Nav";
import Products from "../data/Product";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Collections = () => {
  const [title, sTitle] = useState("");

  return (
    <div className="flex flex-col ">
      <div className="bg-[#dce7ed] w-full h-auto ">
        <div className="flex flex-col justify-center  my-4 mx-auto w-[87.5rem]">
          <div className="text-center text-7xl ">
            <p className="font-bold">All Products</p>
          </div>
          <div className="text-center my-3 ">
            <p>Build your own plastic–free routine</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex w-[87.5rem] h-auto ">
          <div className="flex flex-col w-[25%] px-4">
            <div className="flex flex-col">
              <div className="mb-6">
                <p className="text-4xl font-semibold">Collections</p>
              </div>
              <div className="flex flex-col">
                {Products.map((product) => (
                  <Link
                    to={`${product.path}`}
                    className="p-4 border border-black rounded-l-full rounded-r-full mb-3"
                  >
                    <div>
                      <p>{product.name}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[75%]">
            <div className="flex">
              <div className="">
                <p>Oral Care</p>
              </div>
              <div>
                <p>--------------------- </p>
              </div>
            </div>
            <div className="">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
