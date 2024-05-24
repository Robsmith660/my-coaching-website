import React, { useState, useEffect } from 'react';
import { Fade } from 'react-reveal'; // Import Fade from react-reveal
import instagram from '../images/instagram.png'; // Import your image
import tiktok from '../images/tiktok.jpg'; // Import your image

const FollowMe = () => {
  const [scrollDirection, setScrollDirection] = useState('down'); // State to track scroll direction

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Check scroll direction
      if (currentScrollTop > lastScrollTop) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="follow-me-section py-12 bg-black text-white">
      <div className="container mx-auto flex flex-col items-center">
        <Fade bottom when={scrollDirection === 'down'}> {/* Trigger animation when scroll direction is down */}
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
        </Fade>
      </div>
    </section>
  );
};

export default FollowMe;
