import { uniform } from "../data/Product";

const Uniform = () => {
  return (
    <div clas>
      <div className=" bg-[url('https://cdn.shopify.com/s/files/1/1864/2187/files/Bite_Holiday_Content1109-16_9.jpg')] bg-cover w-full h-[80rem]">
        <div>
          <p>Uniform</p>
        </div>
        <div className="grid grid-cols-3 ">
          {uniform.map((uniform) => (
            <div className="">
              <p>
                {uniform.name} {uniform.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Uniform;
