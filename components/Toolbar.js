import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import mainContext from "../context/mainContext";

const Toolbar = ({ monsters }) => {
  const {
    player,
    setPlayer,
    gold,
    setMonster,
    setMonsterHp,
    setPlayerHp,
    setInventory,
    setWeapon,
  } = useContext(mainContext);

  const nav = useNavigate();

  function logout() {
    setPlayer(null);
    setPlayerHp(100);
    const arr = [];
    setInventory(arr);
    setWeapon({
      image:
        "https://flyclipart.com/thumb2/question-mark-png-images-free-download-507170.png",
    });
    nav("/");
  }

  function addMonster() {
    const randomMonster = monsters[Math.floor(Math.random() * monsters.length)];

    setMonster(randomMonster);
    setMonsterHp(100);
  }

  return (
    <div className="toolbar">
      {player && (
        <div className="toolbar-box">
          <div className="toolbar-links d-flex g40">
            <Link to="/main">Main</Link>
            <Link to="/shop">Shop</Link>
            <Link onClick={addMonster} to="/arena">
              Arena
            </Link>
          </div>

          <div className="gold">Gold: {gold} </div>
          <div></div>
          <div>
            <button onClick={logout}>Logout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Toolbar;
