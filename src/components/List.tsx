import React from "react";

export default function List({
  items,
  onClick,
}: {
  items: string[];
  onClick: (item: string) => void;
}) {
  return (
    <div>
      {items.map((item, index) => (
        <li key={index}>
          <button onClick={() => onClick(item)}>{item}</button>
        </li>
      ))}
    </div>
  );
}
