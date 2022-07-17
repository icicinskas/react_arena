import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import mainContext from "../context/mainContext";

import PostCard from "../components/PostCard";
import MonsterCard from "../components/MonsterCard";
import ModalInv from "../components/ModalInv";

const ArenaPage = ({ dropItems }) => {
  const nav = useNavigate();

  const {
    player,
    modal,
    setModal,
    weapon,
    setWeapon,
    atk,
    monsterHp,
    setMonsterHp,
    monsterHelth,
    playerHp,
    setPlayerHp,
    playerHelth,
    inventory,
    setInventory,
    monsterAtk,
    setPlayer,
  } = useContext(mainContext);

  function showInv() {
    setModal(true);
  }

  function attack() {
    if (monsterHp === 0) return;

    let attackPlayer = Math.floor(Math.random() * atk);
    let hp = Math.floor((attackPlayer * 100) / monsterHelth);
    setMonsterHp(monsterHp - hp);
    if (monsterHp <= 0) {
      setMonsterHp(0);
      alert("You won, choose another monster");
      const randomDrop =
        dropItems[Math.floor(Math.random() * dropItems.length)];

      setInventory([...inventory, randomDrop]);
    }

    let attackMonster = Math.floor(Math.random() * monsterAtk);
    let hpM = Math.floor((attackMonster * 100) / playerHelth);
    setPlayerHp(playerHp - hpM);
    if (playerHp <= 0) {
      setPlayerHp(100);
      alert("You lost");
      setPlayer(null);
      const arr = [];
      setInventory(arr);
      setWeapon({
        image:
          "https://flyclipart.com/thumb2/question-mark-png-images-free-download-507170.png",
      });
      nav("/");
    }
  }

  return (
    <div className="arena d-flex fl-col m5-a">
      <div className="d-flex a-c">
        <div>
          <div>
            <PostCard char={player} />
          </div>

          <div className="player-hp-border">
            <div style={{ width: `${playerHp}%` }} className="player-hp"></div>
          </div>
        </div>

        <div>
          <button onClick={attack} className="attack">
            Attack
          </button>
        </div>

        <div>
          <div>
            <MonsterCard />
          </div>

          <div className="monster-hp-border">
            <div
              style={{ width: monsterHp + "%" }}
              className="monster-hp"
            ></div>
          </div>
        </div>
      </div>

      <div className="weapon-place">
        <div className="weapon-box">
          <img src={weapon.image} alt="Choose weapon" />
        </div>
      </div>

      <div className="footer d-flex a-c">
        <button onClick={showInv} className="inv-btn">
          Inventory
        </button>
      </div>

      {modal && <ModalInv />}
    </div>
  );
};

export default ArenaPage;
