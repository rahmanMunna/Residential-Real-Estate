import { useEffect, useState } from "react";
import Estate from "../A_Estate/Estate";

const Estates = () => {

    const [estates, setEstates] = useState([])

    useEffect(() => {
        fetch('../../../public/Data/Residential_estate.json')
            .then(result => result.json())
            .then(data => setEstates(data))
    }, [])



    // console.log(estates)


    return (
        <div className="">
            <h1 className='text-5xl font-bold text-center'>Our Estates</h1>
            <div className="my-10 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-10">
                {
                    estates.map(estate =>
                        <Estate key={estate.id}
                            estate={estate}>
                        </Estate>)
                }
            </div>

        </div>
    );
};

export default Estates;