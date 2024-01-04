import React from 'react'
import "./index.css"
// import image from "../../ProjectImages/Naresh-Image.png"

const Hero = () => {
  return (
    <section className='container'>
        <div className='content'>
             <h1 className='heroTitle'>Hi, I'm Chitra Naresh</h1>
             <p className='description'>I'm Chita Naresh, a passionate MERN stack developer with expertise in React and Node.js. I specialize in creating dynamic and efficient web applications that deliver seamless user experiences.</p>
             <a className='contactBtn' href='mailto:nnaresh8404@gmail.com'>Contact me</a>
        </div>
        
        <img className='heroImg' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png" alt="user"/>
    <div className='topBlur'/>
    <div className='bottomBlur'/>
    </section>
  )
}

export default Hero