import React from 'react'
import {MdEmail} from "react-icons/md"
import {FaLinkedin} from "react-icons/fa"
import { FaGithub } from 'react-icons/fa'
import "./index.css"

const Contact = () => {
  return (
    <section className='contactSection' id="#contact">
        <div className='contactUsContainer'>
         <div className='contactHeadingCard'>
              <h2 className='contactText'>Contact</h2>
              <p className='contactDes'>Feell free to reach out!</p>
         </div>
         <div>
            <div className='socialIconsCard'>
                <div  className='iconCard'>
                <MdEmail className='footerIcon'/>
                </div>
              <p className='socialLinks'>nnaresh8404@gmail.com</p>
            </div>
            <div className='socialIconsCard'>
                <div  className='iconCard'>
                    <FaLinkedin className='footerIcon'/>
                </div>
            <a href='https://www.linkedin.com/in/chitra-naresh-0964661a7' target='_blank' className='socialLinks'>Github</a>
            </div>
            <div className='socialIconsCard'>
                <div className='iconCard'>
                    <FaGithub className='footerIcon'/>
                </div>
            <a href='https://github.com/ChitraNaresh' target='_blank' className='socialLinks'>Linkedin</a>
            </div>
         </div>
         </div>
    </section>
  )
}

export default Contact