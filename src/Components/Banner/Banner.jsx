import img1 from '../../assets/Banner/1.jpg'
import img2 from '../../assets/Banner/2.jpg'
import img3 from '../../assets/Banner/3.jpg'
import img4 from '../../assets/Banner/4.jpg'




const Banner = () => {

    return (
        <div className="carousel w-full mt-10 rounded-xl">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src={img1}
                    className="w-full h-3/4" />
                <div className="absolute left-5 right-5 top-1/3 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle bg-black text-white">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-black text-white">❯</a>
                </div>



            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={img2}
                    className="w-full h-3/4" />
                <div className="absolute left-5 right-5 top-1/3 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle bg-black text-white">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-black text-white">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={img3}
                    className="w-full h-3/4" />
                <div className="absolute left-5 right-5 top-1/3 flex -translate-y-1/2 transform  justify-between">
                    <a href="#slide2" className="btn btn-circle bg-black text-white">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-black text-white">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src={img4}
                    className="w-full h-3/4" />
                <div className="absolute left-5 right-5 top-1/3 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle bg-black text-white">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-black text-white">❯</a>
                </div>
            </div>
        </div>
    )
};

export default Banner;