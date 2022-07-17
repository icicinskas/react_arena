import { useContext } from "react";
import mainContext from "../context/mainContext";

const MonsterCard = () => {
  const { monster, setMonsterAtk, setMonsterHelth } = useContext(mainContext);

  const mAtk = Number(monster.maxDamage);
  setMonsterAtk(mAtk);

  const monstH = Number(monster.health);
  setMonsterHelth(monstH);

  return (
    <div className="post p5">
      <img src={monster.image} alt="" />
      <h3>{monster.name}</h3>
      <div>Damage: {monster.maxDamage}</div>
      <div>Helth: {monster.health} </div>
    </div>
  );
};

export default MonsterCard;
