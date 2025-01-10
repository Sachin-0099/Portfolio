import React from 'react';

const portfolio = () => {
    const Portfolio = [
        {
            id: 1,
            src: 'Images/Netflix.jpeg'
        },
        {
            id: 2,
            src: '/Images/Jaehaerys.jpeg'
        },
        {
            id: 3,
            src: 'Images/MealShare.webp'
        },
        {
            id: 4,
            src: 'Images/MealShar.jpeg'
        },
        {
            id: 5,
            src: 'Images/Apple.jpeg'
        },
        {
            id: 6,
            src: 'Images/Mission1m.png'
        }
    ];

    return (
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                    <p className="py-4">Check out some of my work right here</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-10 sm:px-0">
                    {Portfolio.map(({ id, src }) => (
                        <div
                            key={id}
                            className="shadow-md shadow-gray-600 rounded-lg flex flex-col h-[270px]" // Set a fixed height
                        >
                            <img
                                className="rounded-t-md duration-200 hover:scale-105 object-cover h-[60%]" // Set image height
                                src={src}
                                alt="Portfolio Project"
                            />
                            <div className="flex items-center justify-center space-x-4 py-4 h-[30%]"> {/* Buttons section */}
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

export default portfolio;
