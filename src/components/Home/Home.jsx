import React from 'react'
import "./Home.scss"
import Pic from "../../Assets/banner.jpeg"

export default function Home() {
    return (
        <div className='homeSection'>
            <div className="homeContent">
                <div className="banner"><img src={Pic} alt="" />
                    <div className="heroSection">
                        <div className="title">
                            Connecting Top Talent with Leading Companies
                        </div>
                        <div className="button">
                            Hire Talent
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
