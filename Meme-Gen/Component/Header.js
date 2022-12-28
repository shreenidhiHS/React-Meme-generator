import React from "react"


export default function Header(){
    return(
        <div className="header-container">
            <img src="./images/troll-face.png" className="head-logo"/>
            <h1 className="head-title">Meme generator</h1> 
            <a href="*"className="about">About</a>
            <a href="*"className="contact">Contact-us</a>         
        </div>
    )
}