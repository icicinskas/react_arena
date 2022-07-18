import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import mainContext from "../context/mainContext";

const PostCard = ({ char }) => {
  const { setPlayer, setGold, weapon, setAtk, setPlayerHelth } =
    useContext(mainContext);

  const nav = useNavigate();

  function chooseChar() {
    setPlayer(char);
    setGold(char.gold);
    nav("/main");
  }

  if (!weapon.maxDamage) {
    setAtk(char.damage);
    console.log(atk);
  } else {
    setAtk(char.damage + weapon.maxDamage);
    console.log(atk);
  }

  setPlayerHelth(char.health);

  return (
    <div onClick={() => chooseChar()} className="post p5">
      <img src={char.image} alt="" />
      <h3>{char.race}</h3>
      {!weapon.maxDamage && <div>Damage: {char.damage}</div>}
      {weapon.maxDamage && (
        <div>
          Damage: {char.damage} + {weapon.maxDamage}
        </div>
      )}
      <div>Helth: {char.health} </div>
      <div>Star Gold: {char.gold}</div>
    </div>
  );
};

export default PostCard;
