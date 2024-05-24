// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <p>&copy; {new Date().getFullYear()} Your Coaching Business. All rights reserved.</p>
          <ul className="flex">
            <li className="mr-4"><a href="privacyPolicy" className="hover:text-red-500">Privacy Policy</a></li>
            <li><a href="termsOfService" className="hover:text-red-500">Terms of Service</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
