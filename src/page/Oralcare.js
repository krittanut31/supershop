import { oralcare } from "../data/Product";
import Cardcollection from "../component/CardCollection";

const OralCare = () => {
  return (
    <div>
      <div className=" bg-cover w-full h-auto">
        <div className="grid grid-cols-3">
          {oralcare.map((oral) => (
            <div className="w-[280px]">
              <Cardcollection
                name={oral.name}
                price={oral.price}
                type={oral.type}
                reviews={oral.reviews}
                bg={oral.bg}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OralCare;
