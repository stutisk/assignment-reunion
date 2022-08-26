import { useWishlist } from "../../Context/WishlistContext";
import { Card } from "../../Components/Card/Card";

const Favorities = () => {
  const { state } = useWishlist();
  return (
    <div className="pading-l-r ">
      <h1>Saved Homes({state.wishlist.length})</h1>
      <div className=" flex flex-wrap gap-cards ">
        {state.wishlist.map((property) => {
          return <Card property={property} key={property.id} />;
        })}
      </div>
    </div>
  );
};
export { Favorities };
