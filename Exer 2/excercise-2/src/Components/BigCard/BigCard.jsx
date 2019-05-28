import React from "react"
import "./BigCard.css"

export const BigCard = props => {
    const hero = props.hero;

    return(
        <div className="BigCard">
            <h1 className="BigCard__TitleElement">{hero.name}</h1>
            <h2 className="BigCard__TitleElement">{hero.real_name}</h2>
            <p className="BigCard__HeroeGameElement">
                <b>
                    {`Role: ${hero.role.name}`}
                </b>
            </p>
            <p className="BigCard__HeroeGameElement">{`Health: ${hero.health}`}</p>
            <p className="BigCard__HeroeGameElement">{`Armour: ${hero.armour}`}</p>
            <p className="BigCard__TextElement">{`Age: ${hero.age}`}</p>
            <p className="BigCard__DescriptionElement">{`Description: ${hero.description}`}</p>
            <p className="BigCard__ExtraElement">{`Base of Operatios: ${hero.base_of_operations}`}</p>
            <p className="BigCard__ExtraElement">{`Affiliation: ${hero.affiliation}`}</p>
        </div>
    );


}