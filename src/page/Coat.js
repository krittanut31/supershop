import { coat } from "../data/Product";

const Coat = () => {
  return (
    <div>
      <div className=" bg-[url('https://cdn.shopify.com/s/files/1/1864/2187/files/Bite_Holiday_Content1109-16_9.jpg')] bg-cover w-full h-[80rem]">
        Coat
        <div className="grid grid-cols-3 ">
          {coat.map((co) => (
            <div>
              <p>
                {co.name} {co.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coat;
