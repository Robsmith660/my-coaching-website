import React from 'react';
import myImage from '../images/portrait.jpg'; // Import your image
import '../App.css'; // Adjust the path based on the location of App.css

const About = () => {
  return (
    <section className="about-section py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-8">
          {/* Apply additional styles to the image */}
          <div className="image-container">
            <img src={myImage} alt="MyImage" className="rounded-full w-48 h-48 md:w-full md:h-auto mx-auto md:mx-0 image border-8" />
          </div>
        </div>
        <div className="md:w-1/2 md:pl-8">
          {/* Updated heading with responsive centering */}
          <h2 className="text-3xl font-bold mb-4 text-center md:text-left">Meet Dylan💪</h2>
          <div className="service-card bg-red-600 p-6 rounded-lg mb-4 border border-white hover:bg-black hover:text-red-600 hover:border-red-600 transition duration-300 ease-in-out">
            <h3 className="text-xl font-bold mb-4">Online Coach</h3>
            <p className="text-lg text-white mb-4">
              Experience the transformative power of one-on-one coaching sessions tailored to your individual requirements. Our certified coaches leverage evidence-based techniques and personalized strategies to help you overcome obstacles, maximize your strengths, and reach your objectives with confidence and clarity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
