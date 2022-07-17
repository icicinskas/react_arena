import { useContext } from "react";
import mainContext from "../context/mainContext";
import InventoryBox from "./InventoryBox";

const ModalInv = () => {
  const { setModal } = useContext(mainContext);

  return (
    <div className="modal">
      <div className="modal-inv">
        <div className="close-btn d-flex jc-e">
          <button onClick={() => setModal(false)} className="close pntr">
            &times;
          </button>
        </div>
        <div className="modal-box m10">
          <InventoryBox />
        </div>
      </div>
    </div>
  );
};

export default ModalInv;
