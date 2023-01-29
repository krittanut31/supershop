import { oralcare } from "../../data/Product";
import Cardcollection from "../../component/CardCollection";

const OralCare = () => {
  return (
    <div>
      <div className=" bg-cover w-full h-auto">
        <div className="grid grid-cols-3">
          {oralcare.map((oral) => (
            <div className="w-[320px]">
              <Cardcollection {...oral} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OralCare;
