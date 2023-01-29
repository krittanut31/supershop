import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProductCheckout from "../component/ProductCheckout";
import { oralcare } from "../data/Product";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className=" w-full h-auto flex flex-col">
      <div className="w-full h-28 flex items-end justify-center">
        <div className="w-[85%] h-12">
          <p className="text-5xl ml-24">Bite</p>
        </div>
      </div>
      <div className="w-[85%] mx-auto  h-auto  ">
        <div className=" h-full mt-4 mx-24  flex">
          <div className=" w-[50%] p-4">
            <p className="text-xl font-semibold">
              Customer & shipping information
            </p>
            <form className="mt-4">
              <div className="h-16 flex border border-slate-500 rounded-sm">
                <label className="ml-6 font-semibold text-lg self-center py-4 w-40 ">
                  Email
                </label>
                <input
                  type="text"
                  name=""
                  value=""
                  className=" w-96 focus:outline-none "
                  placeholder="Email"
                />
              </div>
              <div className="mt-8 flex">
                <p className="font-semibold">
                  Have an account?{" "}
                  <Link
                    to="login"
                    className="text-blue-700 hover:text-blue-500"
                  >
                    Login
                  </Link>{" "}
                  or{" "}
                  <Link
                    to="register"
                    className="text-blue-700 hover:text-blue-500"
                  >
                    Create an account
                  </Link>
                </p>
              </div>
              <p className="mt-16 text-xl font-semibold">Shipping address</p>
              <div className="mt-6">
                <div className="h-16 flex border border-slate-500 rounded-sm">
                  <label className="ml-6 font-semibold text-lg self-center py-4 w-40 ">
                    First name
                  </label>
                  <input
                    type="text"
                    name=""
                    value=""
                    className=" w-96 focus:outline-none "
                    placeholder="First name"
                  />
                </div>
                <div className="h-16 flex border border-slate-500 rounded-sm">
                  <label className="ml-6 font-semibold text-lg self-center py-4 w-40 ">
                    Last name
                  </label>
                  <input
                    type="text"
                    name=""
                    value=""
                    className=" w-96 focus:outline-none "
                    placeholder="Last name"
                  />
                </div>
                <div className="h-16 flex border border-slate-500 rounded-sm">
                  <label className="ml-6 font-semibold text-lg self-center py-4 w-40 ">
                    Company
                  </label>
                  <input
                    type="text"
                    name=""
                    value=""
                    className=" w-96 focus:outline-none "
                    placeholder="Company (optional)"
                  />
                </div>
                <div className="h-16 flex border border-slate-500 rounded-sm">
                  <label className="ml-6 font-semibold text-lg self-center py-4 w-40 ">
                    Address
                  </label>
                  <input
                    type="text"
                    name=""
                    value=""
                    className=" w-96 focus:outline-none "
                    placeholder="Address"
                  />
                </div>
                <div className="h-16 flex border border-slate-500 rounded-sm">
                  <label className="ml-6 font-semibold text-lg self-center py-4 w-40 ">
                    Apt, suite, etc.
                  </label>
                  <input
                    type="text"
                    name=""
                    value=""
                    className=" w-96 focus:outline-none "
                    placeholder="Apt, suite, etc."
                  />
                </div>
                <div className="h-16 flex border border-slate-500 rounded-sm">
                  <label className="ml-6 font-semibold text-lg self-center py-4 w-40 ">
                    City
                  </label>
                  <input
                    type="text"
                    name=""
                    value=""
                    className=" w-96 focus:outline-none "
                    placeholder="City"
                  />
                </div>
                <div className="h-16 flex border border-slate-500 rounded-sm">
                  <label className="ml-6 font-semibold text-lg self-center py-4 w-40 ">
                    Country
                  </label>
                  <input
                    type="text"
                    name=""
                    value=""
                    className=" w-96 focus:outline-none "
                    placeholder="Country"
                  />
                </div>
                <div className="h-16 flex border border-slate-500 rounded-sm">
                  <label className="ml-6 font-semibold text-lg self-center py-4 w-40 ">
                    State
                  </label>
                  <input
                    type="text"
                    name=""
                    value=""
                    className=" w-96 focus:outline-none "
                    placeholder="Email"
                  />
                </div>
                <div className="h-16 flex border border-slate-500 rounded-sm">
                  <label className="ml-6 font-semibold text-lg self-center py-4 w-40 ">
                    ZIP code
                  </label>
                  <input
                    type="text"
                    name=""
                    value=""
                    className=" w-96 focus:outline-none "
                    placeholder="ZIP code"
                  />
                </div>
                <div className="h-16 flex border border-slate-500 rounded-sm">
                  <label className="ml-6 font-semibold text-lg self-center py-4 w-40 ">
                    Phone
                  </label>
                  <input
                    type="text"
                    name=""
                    value=""
                    className=" w-96 focus:outline-none "
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div className="mt-6">
                <form>
                  <label
                    for=""
                    className="ml-6 font-semibold text-lg self-center"
                  >
                    <input
                      type="checkbox"
                      name=""
                      value=""
                      className="w-4 h-4 mr-4 rounded-xs "
                    />
                    Send me special offers through text*
                  </label>
                </form>

                <p className="text-[10px] ml-6">
                  *I agree to receive recurring automated marketing text
                  messages (e.g. cart reminders) at the phone number provided.
                  Consent is not a condition to purchase. Msg & data rates may
                  apply. Msg frequency varies. Reply HELP for help and STOP to
                  cancel. View our Terms of Service and Privacy Policy.
                </p>
              </div>
              <div className="flex justify-between ml-6 mt-8">
                <Link to="/" className="text-xl font-semibold">
                  {"<"} Return
                </Link>
                <Link
                  to=""
                  className="px-4 py-2 text-white bg-blue-700 border-2 border-black rounded-full"
                >
                  Continue
                </Link>
              </div>
            </form>
          </div>
          <div className="w-[50%] py-4 pl-6 ">
            <div className="w-full flex flex-col bg-slate-300 py-4 px-8">
              <div className="py-4 font-semibold text-2xl">Order summary</div>
              <div className="overflow-y-auto h-[40rem]">
                {cart?.item.map((item) => (
                  <ProductCheckout
                    quantity={item.quantity}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    type={item.type}
                    bg={item.bg}
                  />
                ))}
              </div>
              <div className="mt-8">
                <div className="flex justify-between my-1">
                  <div>Subtotal</div>
                  <div>
                    {"$"}
                    {cart.totalPrice}
                  </div>
                </div>
                <div className="flex justify-between my-1">
                  <div>Shipping </div>
                  <div>{cart.totalPrice}</div>
                </div>
                <div className="flex justify-between my-1">
                  <div>Taxes</div>
                  <div>{cart.totalPrice}</div>
                </div>
              </div>
              <div className="flex justify-between mt-8">
                <div>Total</div>
                <div>
                  {"$"}
                  {cart.totalPrice}
                </div>
              </div>
              <div className="flex justify-between mt-8">
                <div>Payment Due</div>
                <div>
                  {"$"}
                  {cart.totalPrice}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-16 flex justify-center items-center border-t border-black">
        <p className="w-[85%]">
          All rights reserved © 2023 Bite - Toothpaste Bits
        </p>
      </div>
    </div>
  );
};
export default Checkout;
