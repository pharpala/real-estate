import React from 'react';
import Hardik from '../assets/hardik.png';

const About = () => {
  return (
    <section className="bg-gray-100 py-20 pl-[5%] pr-[5%]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">About Me</h2>
            <p className="text-gray-600 mb-4 text-center">
              Hi, I'm Hardik Mishra, a dedicated real estate professional with over 10 years of experience in the industry. I specialize in connecting people with their dream properties, and I am passionate about helping clients find the perfect place to call home. My deep knowledge of the local market and commitment to customer satisfaction have earned me a reputation as a trusted real estate expert.
            </p>
            <p className="text-gray-600 mb-4 text-center">
              When I'm not working, I love traveling, photography, and spending quality time with my family. I believe that buying a home should be an exciting and stress-free experience, and I strive to make that a reality for all my clients.
            </p>
            <p className="text-gray-600 text-center">
              Whether you're looking for a cozy cottage or a luxury villa, I'm here to guide you through every step of the process and ensure you find a place that feels just right.
            </p>
          </div>

          {/* Image Section */}
          <div>
            <img 
              src={Hardik}
              alt="Portrait of Hardik Mishra" 
              className="rounded-lg shadow-lg object-cover w-80 h-80 md:h-full ml-auto mr-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
