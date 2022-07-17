import { useState } from "react";
import WeaponCard from "../components/WeaponCard";
import PotionCard from "../components/PotionCard";
import InventoryBox from "../components/InventoryBox";

const ShopPage = ({ weapons, potions }) => {
  const [change, setChange] = useState(true);

  return (
    <div className="d-flex">
      <div className="shop d-flex fl-col grow1">
        <div className="shop-toolbar">
          <button onClick={() => setChange(true)} className="w-btn p5">
            Weapon
          </button>
          <button onClick={() => setChange(false)} className="p-btn p5">
            Potion
          </button>
        </div>
        <div className="shop-items">
          {change && (
            <div className="d-flex wrap-flex g5">
              {weapons.map((x, i) => (
                <WeaponCard item={x} key={i} location="shop" />
              ))}
            </div>
          )}
          {!change && (
            <div className="d-flex wrap-flex g5">
              {potions.map((x, i) => (
                <PotionCard item={x} key={i} location="shop" />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="shop-inv d-flex grow1">
        <InventoryBox />
      </div>
    </div>
  );
};

export default ShopPage;
