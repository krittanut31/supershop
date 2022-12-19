import { tshirt } from "../data/Product";

const TShirt = () => {
  return (
    <div>
      <div className=" bg-[url('https://cdn.shopify.com/s/files/1/1864/2187/files/Bite_Holiday_Content1109-16_9.jpg')] bg-cover w-full h-[80rem]">
        TShirt
        <div className="grid grid-cols-3 ">
          {tshirt.map((tshirt) => (
            <div>
              <p>
                {tshirt.name} {tshirt.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TShirt;
