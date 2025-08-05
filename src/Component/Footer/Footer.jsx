import React from "react"
import { FiSend } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import "./Footer.css"
import video1 from "../../assets/video1.mp4"

const Footer = () => {
    return (
        <section className="footer">
            <div className="videoDiv">
                <video src={video1} autoPlay muted loop></video>
            </div>
            <div className="secContent container">
                <div className="contactDiv">
                    <div className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv">
                        <input type="text" placeholder="Enter email address" />
                        <button className="btn flex">
                            SEND <FiSend />
                        </button>
                        <div className="iconBox flex">
                            <FiFacebook className="icon" />
                            <FaInstagram className="icon" />
                            <FaTripadvisor className="icon" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Footer