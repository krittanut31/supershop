import { personalcare } from "../data/Product";

const PersonalCare = () => {
  return (
    <div>
      <div className=" bg-cover w-full h-[80rem]">
        Personal Care
        <div className="grid grid-cols-3">
          {personalcare.map((pc) => (
            <div>
              <p>
                {pc.name} {pc.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalCare;
