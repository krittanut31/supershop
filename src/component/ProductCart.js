import { MdAdd, MdRemove, MdClose } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../slice/cart";

const ProductCart = ({ name, price, type, reviews, bg, quantity, id }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

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
          <div className="flex border border-black px-2 rounded-full ">
            <MdAdd
              className="mr-2 mt-1 cursor-pointer"
              onClick={() => {
                dispatch(
                  addItem({
                    item: { name, price, type, reviews, bg, id, quantity },
                  })
                );
              }}
            />
            <div className="bg-red-200">
              <p className="px-4">{quantity}</p>
            </div>
            <MdRemove
              className="ml-2 mt-1 cursor-pointer"
              onClick={() => {
                dispatch(
                  removeItem({
                    item: { name, price, type, reviews, bg, id, quantity },
                  })
                );
              }}
            />
          </div>
          <div>{price}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
