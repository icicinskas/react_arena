import { useContext } from "react";
import mainContext from "../context/mainContext";
import PostCard from "../components/PostCard";
import InventoryBox from "../components/InventoryBox";

const MainPage = () => {
  const { player } = useContext(mainContext);

  return (
    <div className="d-flex mt50">
      <div className="d-flex grow1 jc-c">
        <PostCard char={player} />
      </div>

      <div className="main-inv d-flex grow3 jc-c m5-a mv10">
        <InventoryBox />
      </div>
    </div>
  );
};

export default MainPage;
