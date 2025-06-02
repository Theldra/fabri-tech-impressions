import React from 'react';
import { FaIndustry, FaLightbulb, FaUsers } from 'react-icons/fa';

const AboutInnovator = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Meet the Innovator</h1>

        {/* Innovator Profile */}
        <section className="mb-12" data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img 
              src="/images/rita-asimpah.jpg" 
              alt="Rita Ohenewaa Asimpah" 
              className="rounded-lg shadow-md"
            />
            <div>
              <h2 className="text-2xl font-semibold mb-4">Rita Ohenewaa Asimpah</h2>
              <p className="text-gray-600 mb-4">
                Founder & Lead Innovator of Fabri-Tech Impressions, Rita is 
                pioneering sustainable agricultural solutions while breaking barriers 
                in the metal fabrication industry.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <FaIndustry className="text-blue-600 mr-2" />
                  <span>Metal fabrication specialist</span>
                </div>
                <div className="flex items-center">
                  <FaUsers className="text-blue-600 mr-2" />
                  <span>Mentor to aspiring women in engineering</span>
                </div>
                <div className="flex items-center">
                  <FaLightbulb className="text-blue-600 mr-2" />
                  <span>Agricultural innovation expert</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="mb-12" data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Vision</h3>
              <p className="text-gray-600">
                To revolutionize African agriculture through innovative metal 
                fabrication while empowering women in the industry.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Mission</h3>
              <p className="text-gray-600">
                Creating sustainable agricultural solutions and providing 
                opportunities for women in metal fabrication through training 
                and mentorship.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Story */}
        <section data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-4">Making an Impact</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">
              Through Fabri-Tech Impressions, Rita has trained over [X] women in 
              metal fabrication and helped [Y] small-holder farmers increase their 
              productivity with innovative agricultural solutions.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutInnovator;