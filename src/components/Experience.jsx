import React from 'react';

const Experience = () => {
    const techs = [
        { id: 1, src: '/Images/Html.png', title: 'HTML', style: 'shadow-orange-500' },
        { id: 2, src: '/Images/Tailwind.png', title: 'Tailwind', style: 'shadow-sky-400' },
        { id: 3, src: '/Images/Css.png', title: 'CSS', style: 'shadow-blue-500' },
        { id: 4, src: '/Images/Js.png', title: 'JavaScript', style: 'shadow-yellow-500' },
        { id: 5, src: '/Images/Reactjs.png', title: 'ReactJS', style: 'shadow-blue-500' },
        { id: 6, src: '/Images/java.png', title: 'Java', style: 'shadow-orange-500' },
        { id: 7, src: '/Images/images.png', title: 'GitHub', style: 'shadow-gray-400' },
        { id: 8, src: '/Images/SonarQube.png', title: 'SonarQube', style: 'shadow-orange-500' },
        { id: 9, src: '/Images/Docker.png', title: 'Docker', style: 'shadow-sky-500' }
    ];

    return (
        <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-auto py-10">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        Experience
                    </p>
                    <p className="py-6">These are the technologies I have worked with</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-10 text-center py-8">
                    {techs.map(({ id, src, title, style }) => (
                        <div key={id} className={`shadow-md hover:scale-110 duration-300 rounded-lg p-4 ${style}`}>
                            <img src={src} alt={title} className="w-24 h-24 object-contain mx-auto" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
