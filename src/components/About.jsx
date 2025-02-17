import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-20 px-6 md:px-0"> {/* Added min-h-screen and padding */}
      <div className="max-w-screen-lg mx-auto flex flex-col items-center">
        <div className="pb-8">
          <p className="text-5xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>

        <div className="mt-12 text-center w-full"> {/* Added w-full */}
          <p className="text-2xl font-semibold">
            🚀 Building Scalable & Intuitive Digital Solutions 🚀
          </p>
          <div className="prose lg:prose-xl mt-4 leading-relaxed"> {/* Use prose class for better typography */}
            <p>As a full-stack developer, I specialize in crafting efficient backend systems with Spring Boot and developing
              engaging, user-friendly interfaces with React.</p>
            <p>My expertise extends to Kafka-based data pipelines, HL7 message processing, and UI/UX design,
              ensuring seamless integration between backend services and frontend experiences.</p>
          </div>

          <p className="text-2xl font-semibold mt-8">
            🌟 Engineering Scalable & Performant Systems 🌟
          </p>
          <div className="prose lg:prose-xl mt-4 leading-relaxed">
            <p>From building robust Spring Boot microservices to creating dynamic, interactive React applications,
              I am dedicated to delivering high-performance, scalable, and maintainable solutions.</p>
            <p>My experience includes Dockerized environments, database optimization, and cloud-based deployments,
              ensuring reliability and efficiency.</p>
          </div>

          <p className="text-2xl font-semibold mt-8">
            💡 Continuous Growth & Innovation 💡
          </p>
          <div className="prose lg:prose-xl mt-4 leading-relaxed">
            <p>I am continuously enhancing my skills in Data Structures and Algorithms (DSA)
              while refining my expertise in Java and modern frontend technologies.</p>
            <p>Currently, I am developing Criczee, an innovative sports web application
              that integrates seamless UI/UX with a powerful backend.</p>
            <p>My goal is to bridge technology and user experience to build impactful digital products.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;