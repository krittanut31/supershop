import { personalcare } from "../data/Product";
import Cardcollection from "../component/CardCollection";

const PersonalCare = () => {
  return (
    <div>
      <div className=" bg-cover w-full h-auto">
        <div className="grid grid-cols-3">
          {personalcare.map((pc) => (
            <div className="w-[280px]">
              <Cardcollection
                name={pc.name}
                price={pc.price}
                type={pc.type}
                reviews={pc.reviews}
                bg={pc.bg}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalCare;
