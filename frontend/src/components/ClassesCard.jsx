
import { useState } from "react";
import "./ClassesCard.css";

function ClassesCard({ classes }) {

    const [isSelected, setIsSelected] = useState(false);

    function handleClick(){
        setIsSelected(!isSelected);
    
    }


  return (
    <div className = {`class-card ${isSelected ? "selected" : "" }`} onClick={handleClick}>
        <div>
            <p>{classes.title}</p>
        </div>

    </div>
  )
}

export default ClassesCard;