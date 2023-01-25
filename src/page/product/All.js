import OralCare from "./Oralcare";
import PersonalCare from "./Personalcare";
import Bundles from "./Bundles";
import GiftSet from "./GiftSets";

const All = () => {
  return (
    <div>
      <div className="  w-full h-[180rem]">
        <div>
          <div className="flex items-center mb-8">
            <p className=" text-3xl font-[sans-serif]  font-semibold">
              OralCare
            </p>
            <div className="ml-4 h-[5px] w-full bg-[#dce7ed] "></div>
          </div>
          <OralCare />
        </div>
        <div className="mt-16">
          <div className="flex items-center mb-8">
            <p className=" text-3xl font-[sans-serif]  font-semibold">
              PersonalCare
            </p>
            <div className="ml-4 h-[5px] w-full bg-[#dce7ed] "></div>
          </div>
          <PersonalCare />
        </div>
        <div className="mt-16">
          <div className="flex items-center mb-8">
            <p className=" text-3xl font-[sans-serif]  font-semibold">Bundle</p>
            <div className="ml-4 h-[5px] w-full bg-[#dce7ed] "></div>
          </div>
          <Bundles />
        </div>
        <div className="mt-16">
          <div className="flex items-center mb-8">
            <p className=" text-3xl font-[sans-serif]  font-semibold">
              GiftSet
            </p>
            <div className="ml-4 h-[5px] w-full bg-[#dce7ed] "></div>
          </div>
          <GiftSet />
        </div>
      </div>
    </div>
  );
};

export default All;
