
import ClassesCard from "../components/ClassesCard";
import {useState} from "react";

function Options(){

    const [searchQuery, setSearchQuery] = useState("");

    const classes = [
        {id: "CSC350", title: "Wireless & Network Security"},
        {id: "CSC424", title: "Software Eng II"},
        {id: "ITC447", title: "Digital Forensics"},
    ];

const filterSearch = (e) => {
    e.preventDefault()
    alert(searchQuery)
    

};


    
    return (
        <div className = "options">
            <form onSubmit={filterSearch} className="filter-form">
                <input type="text" 
                placeholder="filter classes..."
                 className="filter-input"
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}/>
            
            <button type= "submit"
            className="filter-button">Filter</button>
            </form>

            <div className = "classes-grid">
                {classes.map((cls) => 
               
                (<ClassesCard classes={cls} key={cls.id}/>
            ))}

            </div>

        </div>


    );

}

export default Options;