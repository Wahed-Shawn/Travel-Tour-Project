import React from "react"
import video from "../../assets/video2.mp4"
import "./Home.css"
import { CiLocationOn } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";


const Home = () => {
    return (
        <section className="home">
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop></video>

            <div className="homeContent container">
                <div className="textDiv">

                    <span className="smallText">
                        Our Packages
                    </span>

                    <h1 className="homeTitle">
                        Search your holiday
                    </h1>

                </div>

                <div className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="city">
                            Search your destination:
                        </label>
                        <div className="input flex">
                            <input type="text" placeholder="Enter name here......" />
                            <CiLocationOn className="icon" />
                        </div>
                    </div>
                    <div className="dateInput">
                        <label htmlFor="city">
                            Select your date:
                        </label>
                        <div className="input flex">
                            <input type="date" />
                        </div>
                    </div>
                    <div className="priceInput">
                        <div className="input flex">
                            <div className="label_total flex">
                                <label htmlFor="price">Max price:</label>
                                <h3 className="total">$5000</h3>
                            </div>
                        </div>
                        <div className="input flex">
                            <input type="range" max="5000" min="1000" />
                        </div>

                        <div className="filterOptions flex">
                            <CiFilter className="icon" />
                            <span>More Filters</span>
                        </div>
                    </div>
                </div>

                <div className="homefooterIcons flex">
                    <div className="rightIcons">
                        <FiFacebook className="icon"/>
                        <FaInstagram className="icon"/>
                        <FaTripadvisor className="icon"/>
                    </div>
                    <div className="leftIcons">
                        <BsListTask className="icon"/>
                        <TbApps className="icon"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home