import  React  from "react";

export default function TaskFilter({ children, selected, onClick }) {
  let classes = "";
  if (selected) classes += "selected";
  return (
    <li>
      <button className={classes} onClick={onClick}>
        {children}
      </button>
    </li>
  );
}
