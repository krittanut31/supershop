import { MdAdd, MdRemove } from "react-icons/md";

const ProductCart = ({ name, price, type, reviews, bg, quantity, id }) => {
  return (
    <div className="w-full h-[10rem] flex border-b my-2">
      <div
        className="w-[25%] h-[90%] bg-cover  bg-repeat bg-center rounded-xl"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <div className="w-[75%] flex flex-col justify-between px-4 mb-4">
        <div className="font-[sans-serif] text-xl font-semibold">{name}</div>
        <div className="font-[sans-serif]  italic ">{type}</div>
        <div className="flex justify-between">
          <div className="flex border border-black px-2 rounded-full">
            <MdAdd className="mr-2 mt-1" />
            <div className="bg-red-200">
              <p className="">{quantity}</p>
            </div>
            <MdRemove className="ml-2 mt-1" />
          </div>
          <div>{price}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
