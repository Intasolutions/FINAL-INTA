"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // Trigger when 30% of the footer is visible
    );

    const footer = document.getElementById("footer");
    if (footer) observer.observe(footer);

    return () => {
      if (footer) observer.unobserve(footer);
    };
  }, []);

  return (
    <footer
      id="footer"
      className={`relative text-white py-12 overflow-hidden min-h-screen flex flex-col justify-center transition-opacity duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        background: "linear-gradient(0deg, rgba(42,84,106,1) 0%, rgba(33,140,200,1) 95%)",
      }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold">IN-TA</h2>
            <p className="text-gray-300 mt-2">
              Innovating the future with technology-driven solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white">Services</Link></li>
              <li><Link href="/projects" className="text-gray-300 hover:text-white">Projects</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-gray-300 mt-2">Subscribe to get the latest updates and insights.</p>
            <div className="mt-3 flex flex-col items-center md:items-start">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-2 text-gray-900 rounded-md outline-none"
              />
           <button className="mt-2 px-5 py-2 text-white font-semibold rounded-md relative overflow-hidden group">
  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 transition-all duration-300 ease-in-out group-hover:from-blue-700 group-hover:to-blue-900"></span>
  <span className="absolute top-0 left-0 w-full h-full opacity-10 bg-white transition-opacity duration-300 group-hover:opacity-20"></span>
  <span className="relative z-10">Subscribe</span>
</button>

            </div>
          </div>

          {/* Social Media Links with Hover Tooltips */}
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex justify-center md:justify-start mt-4 space-x-4">
              {[
                { icon: FaFacebook, name: "Facebook", color: "#1877F2", link: "#" },
                { icon: FaTwitter, name: "Twitter", color: "#1DA1F2", link: "#" },
                { icon: FaLinkedin, name: "LinkedIn", color: "#005A8C", link: "#" },
                { icon: FaInstagram, name: "Instagram", color: "#E4405F", link: "#" },
                { icon: FaGithub, name: "GitHub", color: "#181717", link: "#" },
              ].map(({ icon: Icon, name, color, link }, index) => (
                <div key={index} className="relative group">
                  <a
                    href={link}
                    aria-label={name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                    style={{ color }}
                  >
                    <Icon size={26} />
                  </a>
                  {/* Tooltip */}
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-8 px-2 py-1 text-xs text-white bg-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 text-center text-gray-400 text-sm border-t border-gray-600 pt-4">
          © {new Date().getFullYear()} IN-TA. All rights reserved. | <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
