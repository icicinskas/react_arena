import { useContext } from "react";
import mainContext from "../context/mainContext";

const WeaponCard = ({ item }) => {
  const { inventory, setInventory, gold, setGold } = useContext(mainContext);

  function addItem() {
    if (gold >= item.price) {
      setInventory([...inventory, item]);
      setGold(gold - item.price);
    }
  }

  return (
    <div onClick={addItem} className="weapon d-flex wrap-flex g10 a-c">
      <div className="d-flex grow1">
        <img src={item.image} alt="img" />
      </div>
      <div className="d-flex grow3 fl-col">
        <div>Price: {item.price}</div>
        <div>Max Damage: {item.maxDamage}</div>
      </div>
    </div>
  );
};

export default WeaponCard;
