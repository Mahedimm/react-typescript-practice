import React from "react";
import List from "./List";

function Lists() {
  const items: string[] = ["Item 1", "Item 2", "Item 3"];
  const onClick = (item: string): void => {
    alert(item);
  };
  return (
    <div>
      <List items={items} onClick={onClick} />
    </div>
  );
}

export default Lists;
