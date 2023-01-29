import { MdClose } from "react-icons/md";

const ProductCheckout = ({ name, price, type, reviews, bg, quantity, id }) => {
  return (
    <div className="flex items-center justify-between py-8 border-b border-black ">
      <div className="flex items-center">
        <div
          className=" w-[8rem] h-[8rem] bg-cover  bg-repeat bg-center rounded-xl"
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
        <div className="flex ml-20">
          {name} <MdClose className="mt-2 text-xs" /> {quantity}
        </div>
      </div>
      <div className="flex ">
        {"$"}
        {price}
      </div>
    </div>
  );
};

export default ProductCheckout;
