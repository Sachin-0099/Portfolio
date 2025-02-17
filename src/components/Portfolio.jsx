import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
    const portfolioItems = [
        { id: 7, src: "Images/ulinkit.png" },
        { id: 9, src: "Images/Herbal.png" },
        { id: 2, src: "/Images/Jaehaerys.jpeg" },
        { id: 6, src: "Images/Mission1m.png" },
        { id: 3, src: "Images/MealShare.webp" },
        { id: 1, src: "Images/Netflix.jpeg" },
       
      

        { id: 4, src: "Images/MealShar.jpeg" },
        { id: 5, src: "Images/Apple.jpeg" },
       
       
        { id: 8, src: "Images/Portfolio.png" },
        
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div name="portfolio" className="bg-gradient-to-b from-gray-800 via-black to-gray-800 w-full text-white md:h-full pt-20">
            <div
                
                className="p-32 md:p-24 lg:p-8 max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full"
            >
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                    <p className="py-4">Check out some of my work right here</p>
                </div>

                {/* Carousel for smaller screens */}
                <div className="md:hidden">
                    <Slider {...settings}>
                        {portfolioItems.map(({ id, src }) => (
                            <div
                                key={id}
                                className="shadow-md shadow-gray-600 rounded-lg flex flex-col h-[270px]"
                            >
                                <img
                                    className="rounded-t-md duration-200 hover:scale-105 object-cover h-[60%] w-full"
                                    src={src}
                                    alt={`Portfolio Project ${id}`}
                                />
                                <div className="flex items-center justify-center space-x-4 py-4 h-[30%]">
                                    <button className="px-4 py-2 duration-200 hover:scale-105">Demo</button>
                                    <button className="px-4 py-2 duration-200 hover:scale-105">Code</button>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Grid for larger screens */}
                <div className="hidden md:grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-10 sm:px-0">
                    {portfolioItems.map(({ id, src }) => (
                        <div
                            key={id}
                            className="shadow-md shadow-gray-600 rounded-lg flex flex-col h-[270px]"
                        >
                            <img
                                className="rounded-t-md duration-200 hover:scale-105 object-cover h-[60%] w-full"
                                src={src}
                                alt={`Portfolio Project ${id}`}
                            />
                            <div className="flex items-center justify-center space-x-4 py-4 h-[30%]">
                                <button className="px-4 py-2 duration-200 hover:scale-105">Demo</button>
                                <button className="px-4 py-2 duration-200 hover:scale-105">Code</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
