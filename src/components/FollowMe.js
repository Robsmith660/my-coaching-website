import React, { useState, useEffect } from 'react';
import instagram from '../images/instagram.png'; // Import your image
import tiktok from '../images/tiktok.jpg'; // Import your image

const FollowMe = () => {
  return (
    <section className="follow-me-section py-12 bg-black text-white">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-6">Follow Dylan Oreilly</h2>
        <div className="mb-6">
          <div className="follow-line h-2 w-48 bg-white mb-4"></div>
        </div>
        <div className="flex justify-center items-center">
          <a href="https://www.instagram.com/dylanoreillycoaching/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" className="h-16 mr-8" />
          </a>
          <a href="https://www.tiktok.com/@dylanoreillycoaching" target="_blank" rel="noopener noreferrer">
            <img src={tiktok} alt="TikTok" className="h-16" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FollowMe;
