import classes from "./ListItem.module.css";
import { useState } from "react";
function ListItem(props) {
  const [isFull, setIsFull] = useState(false);
  const FullHandler = () => {
    setIsFull((prevState) => !prevState);
  };
  return (
    <div className={classes["list-item-container"]}>
      <li className={classes["list-item"]}>
        <p className={classes.text}>{props.title}</p>
        <button onClick={FullHandler} className={classes.btn}>
          {isFull ? "-" : "+"}
        </button>
      </li>
      {isFull && <p>{props.info}</p>}
    </div>
  );
}
export default ListItem;
