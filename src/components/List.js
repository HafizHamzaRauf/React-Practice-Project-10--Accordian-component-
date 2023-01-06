import ListItem from "./ListItem";
import classes from "./List.module.css";
import questions from "../store/data";
import { useState } from "react";
function List(props) {
  const [items, setItems] = useState(questions);
  const listContent = items.map((item) => (
    <ListItem id={item.id} title={item.title} info={item.info}></ListItem>
  ));
  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Questions And Answers About Login</h1>
      <ul className={classes.list}>{listContent}</ul>
    </div>
  );
}

export default List;
