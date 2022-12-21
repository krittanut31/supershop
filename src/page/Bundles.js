import { bundles } from "../data/Product";

const Bundles = () => {
  return (
    <div>
      <div className=" bg-cover w-full h-[80rem]">
        Bundles
        <div className="grid grid-cols-3">
          {bundles.map((bundle) => (
            <div>
              <p>
                {bundle.name} {bundle.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Bundles;
