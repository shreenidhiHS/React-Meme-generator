import React from "react"
import Data from "../memesdata.js"


export default function Meme(){
    const [meme , setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = React.useState({})
    
    React.useState(() =>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemeImages(data))
    },[])
    
    function getMeme(){
        const memeArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    function handleChange(event){
        const {name , value} = event.target
        setMeme(prevData =>({
            ...prevData,
            [name]: value
        }))
    }
    return(
        <main>
        <div className="form">
            <input  type="text" 
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange} 
                    placeholder="top-text" 
                    className="input-1"/>
                    
            <input  type="text"  
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange} 
                    placeholder="bottom-text" 
                    className="input-2"/>
                    
            <button className="button" onClick={getMeme}>Get a new meme image</button>
             
        </div>
          <div className="meme">
            <img className="meme--image" src={meme.randomImage} alt="Meme willl load here"/>
             <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
          </div>  
        </main>
    )
}