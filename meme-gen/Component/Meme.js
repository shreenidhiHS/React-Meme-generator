import React from "react"
import data from "../memesdata.js"
import dummy from "../dummy.js"

export default function Meme(){
    const [memeImage , setmemeImage] = React.useState(dummy.url)
    
    
    function getMeme(){
        const text1 = document.getElementById('t1').value
        const text2 = document.getElementById('t2').value
        document.getElementById('h1').innerHTML=text1
        document.getElementById('h2').innerHTML=text2
        const memeArray = data.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[randomNumber].url
        setmemeImage(url)
    }
    return(
        <main>
        <div className="form">
            <input id="t1" type="text" placeholder="top-text" className="input-1"/>
            <input id="t2" type="text" placeholder="bottom-text" className="input-2"/>
            <button className="button" onClick={getMeme}>Get a new meme image</button>
             
        </div>
          <div class="image-container">
            <h2 id="h1"></h2>
            <img className="image" src={memeImage} alt="Meme willl load here"/>
            <h2 id="h2"></h2>
          </div>  
        </main>
    )
}