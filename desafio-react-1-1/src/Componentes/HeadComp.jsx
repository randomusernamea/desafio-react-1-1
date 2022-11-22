import { useState } from "react";
import './HeadComp.css';
import logoSenpai from './Images/logoSenpai.png'

function HeadComp(props){
    return(
        <div id="headerMainDiv">
            <div id="homeDiv"><p id="headerPHome">Home</p></div>
            <img src={logoSenpai} id="logoSenpai" alt="logoSenpai"></img>
        </div>
    );

}


export default HeadComp;