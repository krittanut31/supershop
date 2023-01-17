import { MdClose } from "react-icons/md";
import { useState } from "react";
const Cart = () => {
  const [navCart, setNavCart] = useState(false);
  const toggleNavCart = () => {
    setNavCart(!navCart);
  };
  return (
    <div
      className={`flex justify-end w-full h-full fixed top-0 ${
        navCart ? "right-0" : "right-[-100%]"
      }`}
    >
      <div className="flex flex-col justify-between bg-white  w-[40rem] h-full absolute top-0 z-10">
        <div className="flex my-6 ml-6">
          <MdClose
            onClick={toggleNavCart}
            className="text-3xl border border-black  rounded-full cursor-pointer"
          />
          <p className="text-center w-full text-2xl font-semibold">My Cart</p>
        </div>
        {/* สินค้าที่เลือก */}
        <div className="h-full bg-[#dce7ed]">asdasd</div>
        <div className="h-32">total</div>
      </div>
      <div
        className="felx w-full h-full relative z-0 bg-slate-200 opacity-60"
        onClick={toggleNavCart}
      ></div>
    </div>
  );
};
export default Cart;
