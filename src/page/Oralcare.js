import { oralcare } from "../data/Product";

const OralCare = () => {
  return (
    <div>
      <div className=" bg-cover w-full h-[80rem]">
        Oral Care
        <div className="grid grid-cols-3">
          {oralcare.map((oralcare) => (
            <div>
              <p>
                {oralcare.name} {oralcare.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OralCare;
