import { giftsets } from "../data/Product";

const GiftSet = () => {
  return (
    <div>
      <div className=" bg-cover w-full h-[80rem]">
        Gift Sets
        <div className="grid grid-cols-3">
          {giftsets.map((gift) => (
            <div>
              <p>
                {gift.name} {gift.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GiftSet;
