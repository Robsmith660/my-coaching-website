import React, { useEffect } from 'react';
import '../App.css';
import myVideo from '../videos/myvideo.mp4';

const Hero = () => {
  useEffect(() => {
    const video = document.querySelector('.hero-video');
    const heroContent = document.querySelector('.hero-content');

    const handleVideoEnded = () => {
      // Reset opacity to 0 when the video ends
      heroContent.style.opacity = '0';
    };

    const handleTimeUpdate = () => {
      // Start fade-in animation after 5 seconds
      if (video.currentTime >= 5 && heroContent.style.opacity === '0') {
        heroContent.style.opacity = '1';
      }

      // Start fade-out animation 5 seconds before the end of the video
      const fadeOutTime = video.duration - 5;
      if (video.currentTime >= fadeOutTime && heroContent.style.opacity === '1') {
        heroContent.style.opacity = '0';
      }
    };

    const handlePlay = () => {
      // Reset opacity to 0 when the video starts playing
      heroContent.style.opacity = '0';
    };

    video.addEventListener('ended', handleVideoEnded);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('play', handlePlay);

    return () => {
      // Cleanup event listeners
      video.removeEventListener('ended', handleVideoEnded);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('play', handlePlay);
    };
  }, []);

  return (
    <section className="hero-section text-white py-16 flex justify-center items-center">
      <video autoPlay muted loop className="hero-video">
        <source src={myVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content text-center">
        <h2 className="text-4xl font-bold mb-4">Transform Your Life With My Coaching</h2>
        <p className="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum purus in libero feugiat, a sodales ex faucibus.</p>
        <a href="#" className="bg-white text-red-500 py-2 px-6 rounded-full font-bold hover:bg-red-400 transition duration-300">Get Started</a>
      </div>
    </section>
  );
};

export default Hero;
