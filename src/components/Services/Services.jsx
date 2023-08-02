import React from 'react'
import "./Services.scss"
import { MdComputer } from "react-icons/md"
import { BsGraphUpArrow, BsFileBarGraph } from "react-icons/bs"

export default function Services() {
    return (
        <div className='servicesSection'>
            <div className="servicesContent">
                <div className="servicestitle">Services</div>
                <div className="serviceTitle">
                    Hire Top Software Engineers
                    <MdComputer />
                </div>
                <div className="serviceDescription">
                    Our platform connects you with the most skilled and talented software engineers in the industry. Whether you need front-end developers to create intuitive user interfaces, back-end specialists to build robust server-side logic, or full-stack developers capable of handling the entire development process, we have a diverse pool of software engineers to fulfill your specific project needs.
                </div>
                <div className="serviceTitle">
                    Hire Product Managers <BsGraphUpArrow />
                </div>
                <div className="serviceDescription">
                    Find experienced product managers who possess a deep understanding of product development and market dynamics. Our product managers will lead your projects to success by defining product strategies, conducting market research, and collaborating with cross-functional teams to deliver exceptional user experiences and innovative products.
                </div>
                <div className="serviceTitle">
                    Hire Data Scientists <BsFileBarGraph />
                </div>
                <div className="serviceDescription">
                    Unlock the potential of your data with our highly skilled data scientists. They are equipped to analyze complex datasets, extract valuable insights, and develop data-driven solutions. Our data scientists have expertise in machine learning, predictive analytics, and data visualization, enabling you to make informed decisions and gain a competitive edge in your industry.
                </div>
            </div>
        </div>
    )
}
