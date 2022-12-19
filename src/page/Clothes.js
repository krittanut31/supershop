import { clothes } from "../data/Product";

const Clothes = () => {
  return (
    <div>
      <div className=" bg-[url('https://cdn.shopify.com/s/files/1/1864/2187/files/Bite_Holiday_Content1109-16_9.jpg')] bg-cover w-full h-[80rem]">
        Clothes
        <div className="grid grid-cols-3">
          {clothes.map((clothes) => (
            <div>
              <p>
                {clothes.name} {clothes.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clothes;
