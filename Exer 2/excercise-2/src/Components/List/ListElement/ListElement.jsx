import React  from "react";
import "./ListElement.css";

export const ListElement = props =>{
    const hero = props.hero;
    
    function handleHeroChange (e) {
        props.passToParent(e.target.value);
    };

    return (
            <button className= "ListElement" value = {hero.id} onClick={handleHeroChange}  >{`${hero.name}`}</button>
    );

};
