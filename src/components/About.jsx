import React from 'react';
import Hardik from '../assets/hardik.png';

const About = () => {
  return (
    <section id='about' className="bg-gray-100 py-20 pl-[5%] pr-[5%]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">About Me</h2>
            <p className="text-gray-600 mb-4 text-center">
              Hi, I'm Hardik Mishra, welcome to your premier destination for real estate in Tenerife, Canary Islands. As a licensed realtor and mortgage broker, I specialize in guiding clients through the dynamic Tenerife property market. With a Financial Advisor certification from the renowned Universidad Politécnica de Valencia and advanced expertise in digital marketing and e-commerce, I am uniquely positioned to help you buy, sell, or invest in Tenerife real estate.
            </p>
            <p className="text-gray-600 mb-4 text-center">
              My approach combines a deep understanding of local market trends with innovative digital strategies, ensuring that your property goals are not just met, but exceeded. Whether you're looking for a luxury villa, a vacation home, or an investment property, my dedication to personalized service and client satisfaction sets me apart in the industry.
            </p>
            <p className="text-gray-600 text-center">
              Discover the difference that expertise, passion, and local market knowledge can make in your real estate journey. Let's connect today to turn your Tenerife property dreams into reality.
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
