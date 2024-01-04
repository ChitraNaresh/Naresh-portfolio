import React from 'react'
import "./index.css"

export const About = () => {
  return (
    <section className='aboutContainer' id="#about">
        <h1 className='aboutText'>About</h1>
        <div className='aboutContent'>
            <img className='aboutImage' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png" alt="setting-with-laptop"/> 
           <ul className='aboutItems'>
             <li className='aboutItem'>
                <img className='techStackImg' src="https://cdn-icons-png.flaticon.com/512/3771/3771695.png" alt="cursor-icon"/>
                <div className='aboutItemText'>
                <h2>Frontend Developer</h2>
                <p>I'm a Frontend developer experience in building responsive and optimised sites</p>
                </div>
             </li>
             <li className='aboutItem'>
                <img className='techStackImg' src="https://cdn-icons-png.flaticon.com/512/3771/3771695.png" alt="server-icon"/>
                <div className='aboutItemText'>
                <h1 className=''>Backend Developer</h1>
                <p className=''>I'm a Frontend developer experience in building responsive and optimised sites</p>
                </div>
             </li>
           </ul>
        </div>
    </section>
  )
}
