import { favorites } from "../data/Product";

const Favorites = () => {
  return (
    <div>
      <div className=" bg-cover w-full h-[80rem]">
        Community Favorites
        <div className="grid grid-cols-3">
          {favorites.map((favorite) => (
            <div>
              <p>
                {favorite.name} {favorite.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
