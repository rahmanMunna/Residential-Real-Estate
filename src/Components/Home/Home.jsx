import { useLoaderData } from "react-router-dom";
import Estates from "../../Estate/Estates/Estates";
import Banner from "../Banner/Banner";

const Home = () => {

    return (
        <div className="bg-slate-400">
            <div className="mx-auto container">
                <Banner></Banner>
                <Estates></Estates>
            </div>
        </div>
    );
};

export default Home;