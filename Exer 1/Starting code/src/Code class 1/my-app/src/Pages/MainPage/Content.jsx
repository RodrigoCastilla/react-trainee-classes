import React from "react";
import "./Content.css";
import {BgImage} from  "../../Components/BgImage/BgImage";
import {SimpleForm} from "../../Components/SimpleForm/SimpleForm";
import {List} from "../../Components/List/List";

export function Content (props) {
    

    return(
        
        <div>
            {/* <p>{props.contentName==="home"? "home": "no hom" */}
            {
            props.contentName==="Home"? <BgImage />: 
            props.contentName==="List"? <List />:
            props.contentName==="Form"? <SimpleForm /> : <h1>Not found!!</h1>
            }
        </div>
    );
}

