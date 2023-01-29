import { personalcare } from "../../data/Product";
import Cardcollection from "../../component/CardCollection";

const PersonalCare = () => {
  return (
    <div>
      <div className=" bg-cover w-full h-auto">
        <div className="grid grid-cols-3">
          {personalcare.map((pc) => (
            <div className="w-[320px]">
              <Cardcollection {...pc} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalCare;
