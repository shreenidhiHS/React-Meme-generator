import React from "react"
import Header from "./Component/Header.js"
import Meme from "./Component/Meme.js"
import Card from "./Component/Card.js"


export default function App() {
    return(
        <div className="main">
            <Header />
            <Meme />
            <Card />
        </div>
    ) 
}
