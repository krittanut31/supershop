import { jacket } from "../data/Product";

const Jacket = () => {
  return (
    <div>
      <div className=" bg-[url('https://cdn.shopify.com/s/files/1/1864/2187/files/Bite_Holiday_Content1109-16_9.jpg')] bg-cover w-full h-[80rem]">
        Jacket
        <div className="grid grid-cols-3 ">
          {jacket.map((jacket) => (
            <div>
              <p>
                {jacket.name} {jacket.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jacket;
