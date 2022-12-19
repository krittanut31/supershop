import { sweater } from "../data/Product";

const Sweater = () => {
  return (
    <div>
      <div className=" bg-[url('https://cdn.shopify.com/s/files/1/1864/2187/files/Bite_Holiday_Content1109-16_9.jpg')] bg-cover w-full h-[80rem]">
        Sweater
        <div className="grid grid-cols-3 ">
          {sweater.map((sweater) => (
            <div>
              <p>
                {sweater.name} {sweater.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sweater;
