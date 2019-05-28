import React from "react";
import { BigCard } from "../BigCard/BigCard";
import "./InfoSection.css"

export const InfoSection = props => {
    let hero = props.hero;
        
    if(hero === undefined || hero ===null)
        hero = {name: "No Hero Selected"};
    
    return(
        <div className="InfoSection">
            <BigCard key={hero.id} hero={hero}/>
        </div>
    );
}