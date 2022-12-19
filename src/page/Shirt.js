import { shirt } from "../data/Product";

const Shirt = () => {
  return (
    <div>
      <div className=" bg-[url('https://cdn.shopify.com/s/files/1/1864/2187/files/Bite_Holiday_Content1109-16_9.jpg')] bg-cover w-full h-[80rem]">
        Shirt
        <div className="grid grid-cols-3 ">
          {shirt.map((shirt) => (
            <div>
              <p>
                {shirt.name} {shirt.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shirt;
