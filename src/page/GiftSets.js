import { giftsets } from "../data/Product";
import Cardcollection from "../component/CardCollection";

const GiftSet = () => {
  return (
    <div>
      <div className=" bg-cover w-full h-auto">
        <div className="grid grid-cols-3">
          {giftsets.map((gift) => (
            <div className="w-[280px]">
              <Cardcollection {...gift} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GiftSet;
