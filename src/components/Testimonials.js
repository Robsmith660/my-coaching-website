import React from 'react';
import '../App.css'; // Adjust the path based on the location of App.css
import beforeafter from '../images/before-after.jpg'; // Import your image
import beforeafter2 from '../images/placeholder.jpg'; // Import your image
import conor from '../images/conor.jpg'; // Import your image
import beforeafter3 from '../images/beforeafter2.jpg'; // Import your image

const Testimonials = () => {
  return (
    <section className="testimonials py-16 text-center">
      <h2 className="testimonials__heading text-3xl font-bold mb-20">What my clients say</h2>
      <div className="testimonials__container container mx-auto flex flex-col md:flex-row items-center">
        <div className="testimonials__images md:w-1/2 md:pr-8">
          <img
            src={beforeafter}
            alt="Before and After"
            className="testimonials__image rounded-lg w-full md:w-auto md:max-h-96 mx-auto mb-4"
          />
          <img
            src={beforeafter2}
            alt="Before and After"
            className="testimonials__image rounded-lg w-full md:w-auto md:max-h-96 mx-auto mb-4"
          />
          <img
            src={beforeafter3}
            alt="Before and After"
            className="testimonials__image rounded-lg w-full md:w-auto md:max-h-96 mx-auto mb-4"
          />
        </div>
        <div className="testimonials__text md:w-1/2 md:pl-8">
          <div className="testimonials__testimonial border rounded-lg p-6 mb-8">
            <div className="testimonials__profile flex items-center mb-4">
              <img src={conor} alt="Customer" className="testimonials__profile-img rounded-full w-16 h-16 mr-4" />
              <div>
                <p className="testimonials__name text-lg font-semibold">Bob Jane</p>
                <p className="testimonials__title text-gray-500">Professional Fighter</p>
              </div>
            </div>
            <p className="testimonials__text-content text-lg text-gray-300">
              "I had an amazing experience with [Your Business Name]. The coaching sessions were incredibly insightful and helped me achieve my goals in ways I never thought possible. I highly recommend their services to anyone looking to make positive changes in their life."
            </p>
          </div>
          {/* Additional Testimonials */}
          <div className="testimonials__testimonial border rounded-lg p-6 mb-8">
            <div className="testimonials__profile flex items-center mb-4">
              <img src={conor} alt="Customer" className="testimonials__profile-img rounded-full w-16 h-16 mr-4" />
              <div>
                <p className="testimonials__name text-lg font-semibold">John Doe</p>
                <p className="testimonials__title text-gray-500">Software Engineer</p>
              </div>
            </div>
            <p className="testimonials__text-content text-lg text-gray-300">
              "I was skeptical at first, but after just a few sessions with [Your Business Name], I noticed a significant improvement in my productivity and overall satisfaction with my work. Their approach is truly transformative."
            </p>
          </div>
          <div className="testimonials__testimonial border rounded-lg p-6 mb-8">
            <div className="testimonials__profile flex items-center mb-4">
              <img src={conor} alt="Customer" className="testimonials__profile-img rounded-full w-16 h-16 mr-4" />
              <div>
                <p className="testimonials__name text-lg font-semibold">Jane Smith</p>
                <p className="testimonials__title text-gray-500">Marketing Manager</p>
              </div>
            </div>
            <p className="testimonials__text-content text-lg text-gray-300">
              "[Your Business Name] helped me refine my marketing strategy and identify areas for improvement. Their expertise and guidance were invaluable in achieving our campaign goals. Highly recommended!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
