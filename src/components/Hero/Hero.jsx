import React, { useState } from 'react'


import  "./Hero.css"
const Hero = () => {
   const [objimg , setobjimg]=useState('/images/c1.png');

  return (
    <>
    <div className="circle"></div>

    <div className="content">
   
        <div className="textBox">
            <h2>Earthly Products Are<br/><span>Sustainable</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, labore asperio, dicta esse praesentium ab corporis modi tenetur ea maxime</p>
            <div className="butt"><a href="#">Learn More</a></div>
         </div>
            <div className="imgBox" >
                <img  src={objimg} alt="Img1" style={{width: "70%",backgroundColor: 'transparent'}}  />
            </div>

        </div>
        <ul className="thumb"  >
            <li><img src={'/images/c1.png'} alt="Img1" onClick={()=>{
                setobjimg('/images/c1.png')}}/></li>
            <li ><img className="newimg" src={'/images/b1.png'} alt="Img2" style={{backgroundColor: 'transparent'}}onClick={()=>{
                setobjimg('/images/b1.png')
            }}  /></li>
            <li ><img className="newimg" src={'/images/S1.webp'} style={{backgroundColor: 'transparent'}} alt="Img3" onClick={()=>{
                setobjimg('/images/S1.webp')
            }} /></li>
            <li ><img  className="newimg" src={'/images/Bru.png'} alt="Img4" style={{backgroundColor: 'transparent'}} onClick={()=>{
                setobjimg('/images/Bru.png')
            }}  /></li>
        </ul>
    </>
  )
}

export default Hero