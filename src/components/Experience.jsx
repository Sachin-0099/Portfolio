import React from 'react';

const Experience = () => {
    const techs=[
        {
            id:1,
            src:'Images/Html.png',
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:'Images/Tailwind.png'
            ,
            title:'Tailwind',
            style:'shadow-sky-400'
        },
        {
            id:3,
            src:'Images/Css.png'
            ,
            title:'Css',
            style:'shadow-blue-500'
        },
        {
            id:4,
            src:'Images/Js.png'
            ,
            title:'Js',
            style:'shadow-yellow-500'
        },
        {
            id:5,
            src:'Images/Reactjs.png'
            ,
            title:'Reactjs',
            style:'shadow-blue-500'
        },
        {
            id:6,
            src:'Images/java.png'
            ,
            title:'Java',
            style:'shadow-orange-500'
        },
        {
            id:7,
            src:'Images/Github.png'
            ,
            title:'Github',
            style:'shadow-gray-400'
        },
        {
            id:8,
            src:'Images/SonarQube.png'
            ,
            title:'SonarQube',
            style:'shadow-orange-500'
        },
        {
            id:9,
            src:'Images/Docker.png'
            ,
            title:'Docker',
            style:'shadow-sky-500'
        }
       
    ]
  return (
    <div name='experince' 
    className='bg-gradient-to-b from-gray-800 to to-black w-full h-screen'>
      
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
              Experience  

            </p>
            <p className='py-6'>These are the technologies i have worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:ps-0'>

            {
                techs.map(({id,src,title,style})=>(
            <div key={id} className={`shadow-md hover:scale-105 duration-500 oy-2 rounded-lg ${style}`}>
                <img src={src} alt="" className=' w-20 mx-auto'/>
                <p className='mt-4'> {title}</p>
            </div>
        </div>
    );
};

export default Experience;
