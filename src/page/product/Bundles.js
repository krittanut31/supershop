import { bundles } from "../../data/Product";
import Cardcollection from "../../component/CardCollection";

const Bundles = () => {
  return (
    <div>
      <div className=" bg-cover w-full h-auto">
        <div className="grid grid-cols-3">
          {bundles.map((bundle) => (
            <div className="w-[320px]">
              <Cardcollection {...bundle} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Bundles;
