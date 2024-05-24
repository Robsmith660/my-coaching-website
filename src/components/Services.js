import React from 'react';
import '../App.css'; // Adjust the path based on the location of App.css

const Services = () => {
  return (
    <section className="services-section py-16">
      <div className="container mx-auto">

      <h2 className="text-3xl font-bold mb-8 text-white custom-underline text-center md:text-left">My Services✅</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="service-card bg-red-600 p-6 rounded-lg border border-white hover:bg-black hover:text-red-600 hover:border-red-600 transition duration-300 ease-in-out">
            <h3 className="text-xl font-bold mb-4">Personalized Coaching Programs</h3>
            <p className="text-lg text-white mb-4">
              Our flagship offering revolves around personalized coaching programs meticulously crafted to address your unique aspirations, challenges, and growth areas. Whether you're striving for career advancement, personal development, or enhanced well-being, our experienced coaches provide tailored guidance and support every step of the way.
            </p>
          </div>
          <div className="service-card bg-red-600 p-6 rounded-lg border border-white hover:bg-black hover:text-red-600 hover:border-red-600 transition duration-300 ease-in-out">
            <h3 className="text-xl font-bold mb-4">One-on-One Coaching Sessions</h3>
            <p className="text-lg text-white mb-4">
              Experience the transformative power of one-on-one coaching sessions tailored to your individual requirements. Our certified coaches leverage evidence-based techniques and personalized strategies to help you overcome obstacles, maximize your strengths, and reach your objectives with confidence and clarity.
            </p>
          </div>
          <div className="service-card bg-red-600 p-6 rounded-lg border border-white hover:bg-black hover:text-red-600 hover:border-red-600 transition duration-300 ease-in-out">
            <h3 className="text-xl font-bold mb-4">Group Coaching Workshops</h3>
            <p className="text-lg text-white mb-4">
              Join a vibrant community of like-minded individuals in our group coaching workshops designed to foster collaboration, accountability, and collective growth. Led by skilled facilitators, these interactive sessions offer valuable insights, practical tools, and peer support to accelerate your progress and amplify your success.
            </p>
          </div>
          <div className="service-card bg-red-600 p-6 rounded-lg border border-white hover:bg-black hover:text-red-600 hover:border-red-600 transition duration-300 ease-in-out">
            <h3 className="text-xl font-bold mb-4">Online Courses and Resources</h3>
            <p className="text-lg text-white mb-4">
              Gain access to a wealth of knowledge and expertise through our curated selection of online courses, workshops, and resources. Whether you're seeking to enhance your leadership skills, improve your communication abilities, or cultivate a growth mindset, our digital learning platform equips you with the tools and insights needed to thrive in today's fast-paced world.
            </p>
          </div>
          <div className="service-card bg-red-600 p-6 rounded-lg border border-white hover:bg-black hover:text-red-600 hover:border-red-600 transition duration-300 ease-in-out">
            <h3 className="text-xl font-bold mb-4">Specialized Programs for Organizations</h3>
            <p className="text-lg text-white mb-4">
              Elevate team performance and foster a culture of excellence within your organization with our specialized coaching programs tailored for businesses and teams. From leadership development and employee engagement to resilience training and conflict resolution, we offer customized solutions to meet your organization's unique needs and objectives.
            </p>
          </div>
          <div className="service-card bg-red-600 p-6 rounded-lg border border-white hover:bg-black hover:text-red-600 hover:border-red-600 transition duration-300 ease-in-out">
            <h3 className="text-xl font-bold mb-4">Ongoing Support and Accountability</h3>
            <p className="text-lg text-white mb-4">
              Your journey towards personal and professional growth doesn't end with coaching sessions or workshops. We're committed to providing ongoing support and accountability to help you stay on track, navigate challenges, and celebrate milestones along the way. With our unwavering guidance and encouragement, you'll continue to progress towards your goals with determination and resilience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
