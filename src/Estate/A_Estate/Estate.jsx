import { HiCurrencyDollar } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";
import { GrStatusGood } from "react-icons/gr";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa";
import { Link } from "react-router-dom";


const Estate = ({ estate }) => {

    const { id,estate_title, price, status, area, location, facilities, image } = estate;
    console.log(image)

    return (
        <div className="card  border bg-black text-white transition-transform duration-300 hover:scale-110">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt={estate.estate_title}
                    className="rounded-xl" />
            </figure>
            <div className="flex  justify-center">
                <h2 className="text-xl md:text-2xl lg:text-3xl lg:p-4  font-bold">{estate_title}</h2>
            </div>
            <div className="p-5 lg:p-10 space-y-4 items-center">

                <div className="flex justify-between">
                    <div className="flex items-center font-semibold gap-2">
                        <HiCurrencyDollar></HiCurrencyDollar>
                        <h1 className="font-bold">{price}</h1>
                    </div>
                    <div className="flex items-center gap-2 font-semibold">
                        <FaLocationDot></FaLocationDot>
                        <h1>{location}</h1>
                    </div>
                </div>
                <div className="flex gap-3 justify-between">
                    <div className="flex items-center gap-2 font-semibold">
                        <FaExternalLinkSquareAlt></FaExternalLinkSquareAlt>
                        <h1 className="font-bold">{area}</h1>
                    </div>
                    <div className="flex items-center gap-2 font-semibold">
                        <GrStatusGood></GrStatusGood>
                        <h1>{status}</h1>
                    </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                    {
                        facilities.map(facility =>
                            <>
                                <div className="flex items-center border p-2 rounded-xl">
                                    <FaHashtag></FaHashtag><h1 className="text-purple-800 lg:text-xl font-semibold">{facility}</h1>
                                </div>
                            </>)
                    }
                </div>

            </div>
            <div className="card-actions py-5 flex items-center justify-center">
                <Link to={`/estateDetails/${id}`}>
                    <button
                        className="btn btn-primary font-semibold  hover:bg-orange-300 hover:text-black">
                        View Property
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Estate;