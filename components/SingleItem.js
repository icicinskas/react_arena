import { useContext } from "react";
import mainContext from "../context/mainContext";

const SingleItem = ({ item, index }) => {
  const {
    inventory,
    setInventory,
    gold,
    setGold,
    setWeapon,
    playerHp,
    setPlayerHp,
  } = useContext(mainContext);

  function removeItem() {
    if (inventory.length === 1)
      setWeapon({
        image:
          "https://flyclipart.com/thumb2/question-mark-png-images-free-download-507170.png",
      });

    const itemSold = inventory[index];
    const leftItems = inventory.filter((x, i) => i !== index);

    if (Object.keys(itemSold).length > 2) {
      setGold(gold + itemSold.price / 2);
      setInventory(leftItems);
    } else {
      setGold(gold + itemSold.price);
      setInventory(leftItems);
    }
  }

  function putOn() {
    const itemPutOn = inventory[index];
    if (itemPutOn === 2) return;
    setWeapon(itemPutOn);
  }

  function usePotion() {
    const use = inventory[index];
    const leftItems = inventory.filter((x, i) => i !== index);

    let hp = playerHp + use.effect.health;

    setPlayerHp(hp);
    setInventory(leftItems);
  }

  return (
    <div className="d-flex a-c g20">
      <div className="inv-box d-flex a-c g20">
        <div className="d-flex grow1">
          <img src={item.image} alt="img" />
        </div>
        <div className="d-flex grow3 s-btw a-c">
          <div className="d-flex fl-col">
            <div>Price: {item.price}</div>
            {item.title && <div>Title: {item.title}</div>}
            {item.maxDamage && <div>Maxdamage: {item.maxDamage}</div>}
          </div>
        </div>

        <div className="d-flex g10 item-btn">
          <button onClick={removeItem}>Sell</button>
          {item.maxDamage && <button onClick={putOn}>Put On</button>}
          {item.title && <button onClick={usePotion}>Use</button>}
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
