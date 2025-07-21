import { useState } from "react";
function MyButton({onClick, count}) {
 
  return (
    <button
      type="button"
      className="btn btn-info"
      onClick={onClick}
    > Clicked {count} times</button>
  );
}
export default MyButton;
