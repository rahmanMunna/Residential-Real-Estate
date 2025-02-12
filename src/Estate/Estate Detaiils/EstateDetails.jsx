import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { HiCurrencyDollar } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";
import { GrStatusGood } from "react-icons/gr";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa";
import '../../Styles/style.css'

const EstateDetails = () => {

    const data = useLoaderData();
    const { id } = useParams();

    const estate = data.find(a_estate => a_estate.id.toString() === id.toString())
    const { description, segment_name, estate_title, price, status, area, location, facilities, image } = estate;



    return (
        <div className=" mx-auto container flex flex-col items-center space-y-7 p-5">
            {/* <h1 className="text-center text-white lg:text-6xl font-bold border p-3 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">{segment_name}</h1> */}
            <div className="hero-content flex-col lg:flex-row-reverse relative p-5 lg:p-10 rounded-xl 
            border-2 border-y-cyan-400  border-x-emerald-400  bg-gradient-to-r from-emerald-500 from-10% via-sky-500 via-30% to-indigo-500 to-90%
            hover:shadow-xl  hover:shadow-purple-800">

                <img src={image} className="lg:w-1/2 rounded-lg shadow-2xl" />

                <div className="p-5 lg:p-10 space-y-4 items-center">
                    <h1 className="text-4xl font-bold text-purple-600">{estate_title}</h1>
                    <p className="text-lg text-white">
                        <span className="text-xl text-black font-bold">Description: </span>{description}
                    </p>

                    <div className="space-y-3">
                        <div className="flex items-center font-semibold gap-2">
                            <HiCurrencyDollar />
                            <h1 className="font-bold">{price}</h1>
                        </div>
                        <div className="flex items-center gap-2 font-semibold">
                            <FaLocationDot />
                            <h1>{location}</h1>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 font-semibold">
                            <FaExternalLinkSquareAlt />
                            <h1 className="font-bold">{area}</h1>
                        </div>
                        <div className="flex items-center gap-2 font-semibold">
                            <GrStatusGood />
                            <h1 className="font-bold">{status}</h1>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                        {facilities.map((facility, index) => (
                            <div key={index} className="flex items-center border p-2 rounded-xl">
                                <FaHashtag />
                                <h1 className="text-purple-800 lg:text-xl font-semibold">{facility}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>



        </div>
    );
};

export default EstateDetails;