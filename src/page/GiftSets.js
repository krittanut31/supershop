import { giftsets } from "../data/Product";
import Cardcollection from "../component/CardCollection";

const GiftSet = () => {
  return (
    <div>
      <div className=" bg-cover w-full h-auto">
        <div className="grid grid-cols-3">
          {giftsets.map((gift) => (
            <div className="w-[280px]">
              <Cardcollection
                name={gift.name}
                price={gift.price}
                type={gift.type}
                reviews={gift.reviews}
                bg={gift.bg}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GiftSet;
