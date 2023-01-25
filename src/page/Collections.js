import { Products } from "../data/Product";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Collections = () => {
  const [showBorder, setShowBorder] = useState("All Products");
  const [showTiltle, setShowTiltle] = useState("All Products");

  return (
    <div className="flex flex-col mt-20">
      <div className="bg-[#dce7ed] w-full h-auto ">
        <div className="flex flex-col justify-center  my-4 mx-auto w-[87.5rem]">
          <div className="text-center text-8xl ">
            <p className="font-bold">{showTiltle}</p>
          </div>
          <div className="text-center my-3 ">
            <p className="font-semibold text-lg">
              Build your own plastic–free routine
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex w-[87.5rem] h-auto mt-16">
          <div className="flex flex-col w-[25%] px-4">
            <div className="flex flex-col">
              <div className="mb-6">
                <p className="text-4xl font-semibold">Collections</p>
              </div>
              <div className="flex flex-col">
                {Products.map((product) => (
                  <Link
                    to={`${product.path}`}
                    className={`p-4  ${
                      showBorder == `${product.name}`
                        ? " border border-black rounded-l-full rounded-r-full"
                        : ""
                    } mb-3`}
                    onClick={() => {
                      setShowBorder(product.name);
                      setShowTiltle(product.title);
                    }}
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
