import React from "react"
import "./Main.css"
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import img1 from "../../assets/Images/img1.jpg"
import img2 from "../../assets/Images/img2.jpg"
import img3 from "../../assets/Images/img3.jpg"
import img4 from "../../assets/Images/img4.jpg"
import img5 from "../../assets/Images/img5.jpg"
import img6 from "../../assets/Images/img6.jpg"
import img7 from "../../assets/Images/img7.jpg"
import img8 from "../../assets/Images/img8.jpg"
import img9 from "../../assets/Images/img9.jpg"
import img10 from "../../assets/Images/img10.jpg"
import img11 from "../../assets/Images/img11.jpg"
import img12 from "../../assets/Images/img12.jpg"

const Data = [
    {
        id: 1,
        imgSrc: img1,
        destTitle: "Sylhet",
        location: "Bangladesh",
        fees: "$700",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, veniam! Esse fuga doloribus quas facere! Vitae, repudiandae obcaecati. Soluta iste pariatur, harum sapiente accusantium voluptatum! Quaerat."
    },

    {
        id: 2,
        imgSrc: img2,
        destTitle: "Chittagong",
        location: "Bangladesh",
        fees: "$900",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eum nostrum rem mollitia corporis blanditiis itaque inventore laborum iusto perspiciatis, excepturi deleniti qui, explicabo molestiae nemo"
    },

    {
        id: 3,
        imgSrc: img3,
        destTitle: "Cox'sBazar",
        location: "Bangladesh",
        fees: "$1200",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eum nostrum rem mollitia corporis blanditiis itaque inventore laborum iusto perspiciatis, excepturi deleniti qui, explicabo molestiae nemo"
    },

    {
        id: 4,
        imgSrc: img4,
        destTitle: "Savar Union",
        location: "Bangladesh",
        fees: "$1000",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ad architecto molestias suscipit laudantium omnis aliquam. Harum nulla vel eius maiores facere quis inventore commodi!"
    },
    {
        id: 5,
        imgSrc: img5,
        destTitle: "Sea Beach",
        location: "Thailand",
        fees: "$3000",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ad architecto molestias suscipit laudantium omnis aliquam. Harum nulla vel eius maiores facere quis inventore commodi!"
    },
    {
        id: 6,
        imgSrc: img6,
        destTitle: "Bali",
        location: "Indonesia",
        fees: "$3300",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ad architecto molestias suscipit laudantium omnis aliquam. Harum nulla vel eius maiores facere quis inventore commodi!"
    },

    {
        id: 7,
        imgSrc: img7,
        destTitle: "Girisubo",
        location: "Indonesia",
        fees: "$3200",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ad architecto molestias suscipit laudantium omnis aliquam. Harum nulla vel eius maiores facere quis inventore commodi!"
    },

    {
        id: 8,
        imgSrc: img8,
        destTitle: "Chittagong Port",
        location: "Bangladesh",
        fees: "$1200",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ad architecto molestias suscipit laudantium omnis aliquam. Harum nulla vel eius maiores facere quis inventore commodi!"
    },

    {
        id: 9,
        imgSrc: img9,
        destTitle: "Rome",
        location: "Italy",
        fees: "$3700",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ad architecto molestias suscipit laudantium omnis aliquam. Harum nulla vel eius maiores facere quis inventore commodi!"
    },

    {
        id: 10,
        imgSrc: img10,
        destTitle: "Berlin",
        location: "German",
        fees: "$4200",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ad architecto molestias suscipit laudantium omnis aliquam. Harum nulla vel eius maiores facere quis inventore commodi!"
    },

    {
        id: 11,
        imgSrc: img11,
        destTitle: "Louvre Museum",
        location: "France",
        fees: "$4200",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ad architecto molestias suscipit laudantium omnis aliquam. Harum nulla vel eius maiores facere quis inventore commodi!"
    },

    {
        id: 12,
        imgSrc: img12,
        destTitle: "Eiffel Tower",
        location: "France",
        fees: "$4600",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ad architecto molestias suscipit laudantium omnis aliquam. Harum nulla vel eius maiores facere quis inventore commodi!"
    }

]

const Main = () => {
    return (
        <div className="main container section">
            <div className="secTitle">
                <h3 className="title">
                    Most visited destinations
                </h3>

                <div className="secContent grid">
                    {
                        Data.map(({ id, imgSrc, destTitle, location, fees, description }) => {
                            return (
                                <div key={id} className="singleDestination">
                                    <div className="imgDiv">
                                        <img src={imgSrc} alt={destTitle} />
                                    </div>

                                    <div className="cardInfo">
                                        <h4 className="destTitle">{destTitle}</h4>
                                        <span className="continent flex">
                                            <HiOutlineLocationMarker className="icon" />
                                            <span className="name">{location}</span>
                                        </span>

                                        <div className="fees flex">
                                            <h4 className="price">Price: {fees}</h4>
                                        </div>

                                        <div className="description">
                                            <p>{description}</p>
                                        </div>

                                        <button className="btn flex">
                                            DETAILS <HiOutlineClipboardCheck className="icon" />
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Main