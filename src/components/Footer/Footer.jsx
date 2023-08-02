import React from 'react'
import { HiOutlineMailOpen } from "react-icons/hi"
import { BsFillTelephoneFill, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs"
import { AiOutlineHome } from "react-icons/ai"
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si"
import "./Footer.scss"

export default function Footer() {
    return (
        <div className='footerSection'>
            <div className="footerContent">
                <div className="section linkSection">
                    <li onClick={async () => await window.scrollTo({ top: 0, behavior: 'smooth' })}>Top</li>
                    <li >Job Offers</li>
                    <li >About</li>
                </div>
                <div className="section">
                    Contact
                    <li className='contactItems'>
                        <span>
                            <HiOutlineMailOpen />
                        </span>
                        <span className="footerText">
                            abc@gmail.com
                        </span>
                    </li>
                    <li className='contactItems'>
                        <span>
                            <BsFillTelephoneFill />
                        </span>
                        <span className="footerText">
                            0123456789
                        </span>
                    </li>
                    <li className='contactItems'>
                        <span>
                            <AiOutlineHome />
                        </span>
                        <span className="footerText">
                            Graphic Era Hill University, Dehradun, Uttarakhand
                        </span>
                    </li>
                </div>
                <div className="section">
                    <div className='footerIcons'>
                        <span className="footerIcon" >
                            <a href="/" target='_blank' rel="noreferrer">
                                <BsLinkedin />
                            </a>
                        </span>
                        <span className="footerIcon">
                            <a href="/" target='_blank' rel="noreferrer">
                                <BsTwitter />
                            </a>
                        </span>
                        <span className="footerIcon">
                            <a href="/" target='_blank' rel="noreferrer">
                                <BsGithub />
                            </a>
                        </span>
                        <span className="footerIcon">
                            <a href="/" target='_blank' rel="noreferrer">
                                <SiLeetcode />
                            </a>
                        </span>
                        <span className="footerIcon">
                            <a href="/" target='_blank' rel="noreferrer">
                                <SiGeeksforgeeks />
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
