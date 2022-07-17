import { useContext } from "react";
import mainContext from "../context/mainContext";
import SingleItem from "./SingleItem";

const InventoryBox = () => {
  const { inventory } = useContext(mainContext);

  return (
    <div className="inventory">
      {inventory.map((x, i) => (
        <div className="single">
          <SingleItem item={x} key={i} index={i} location="inventory" />
        </div>
      ))}
    </div>
  );
};

export default InventoryBox;
