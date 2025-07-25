import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 800\"%3E%3Cpath d=\"M0,100 Q300,50 600,100 T1200,100 V800 H0 Z\" fill=\"%23C1D72F\" opacity=\"0.05\"/%3E%3C/svg%3E')"
          }}
        ></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <img src={'/assets/white_logo.png'} width={'200px'} alt="Dr. Loki's Dental Logo"/>
            </div>
            <p className="text-gray-400 mb-6 ml-4">
              Your premier destination for exceptional dental care and orthodontic treatments in Chennai.
            </p>
            <div className="flex space-x-4 ml-4">
              <a href="https://www.instagram.com/drlokisdental/" className="bg-gray-700 hover:bg-lime-500 p-3 rounded-full transition-colors duration-200">
                <FaFacebook className="text-white" />
              </a>
              <a href="https://www.instagram.com/drlokisdental/" className="bg-gray-700 hover:bg-lime-500 p-3 rounded-full transition-colors duration-200">
                <FaInstagram className="text-white" />
              </a>
              <a href="https://www.instagram.com/drlokisdental/" className="bg-gray-700 hover:bg-lime-500 p-3 rounded-full transition-colors duration-200">
                <FaTwitter className="text-white" />
              </a>
              <a href="https://wa.me/919840184964?text=Hi%2C%20I%E2%80%99d%20like%20to%20book%20a%20dental%20appointment." className="bg-gray-700 hover:bg-lime-500 p-3 rounded-full transition-colors duration-200">
                <FaWhatsapp className="text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 font-poppins">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-lime-500 transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-lime-500 transition-colors duration-200">About Us</a></li>
              <li><a href="#doctor" className="text-gray-400 hover:text-lime-500 transition-colors duration-200">Our Doctor</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-lime-500 transition-colors duration-200">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-lime-500 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 font-poppins">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-lime-500 transition-colors duration-200">General Dentistry</a></li>
              <li><a href="#" className="text-gray-400 hover:text-lime-500 transition-colors duration-200">Cosmetic Dentistry</a></li>
              <li><a href="#" className="text-gray-400 hover:text-lime-500 transition-colors duration-200">Orthodontics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-lime-500 transition-colors duration-200">Pediatric Dentistry</a></li>
              <li><a href="#" className="text-gray-400 hover:text-lime-500 transition-colors duration-200">Teeth Whitening</a></li>
              <li><a href="#" className="text-gray-400 hover:text-lime-500 transition-colors duration-200">Endodontics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-lime-500 transition-colors duration-200">Prosthodontics </a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 font-poppins">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaPhone className="text-lime-500 mt-1 mr-3" />
                <div className="flex flex-col">
                  <span className="text-gray-400">+91 9840183964 </span>
                  <span className="text-gray-400">+91 9840184964</span>
                </div>
              </div>
              <div className="flex items-start">
                <FaEnvelope className="text-lime-500 mt-1 mr-3" />
                <span className="text-gray-400">smiles@drlokis.in</span>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-lime-500 mt-1 mr-3" />
                <span className="text-gray-400"> R-13, 3rd main road, Bharathi Salai, Nolambur Phase II, Mogappair West, Chennai</span>
              </div>
              <div className="flex items-start">
                <FaClock className="text-lime-500 mt-1 mr-3" />
                <div>
                  <p className="text-gray-400">Mon-Sat: 10:00 AM - 9:00 PM</p>
                  <p className="text-gray-400">Sunday - Only on Appointments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Left-aligned Buildify link */}
                <div className="order-1 md:order-none">
                <a 
                    href="https://buildify-web.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white font-bold hover:text-lime-500 transition-colors duration-200 text-md flex items-center"
                >
                    <span className="mr-1 font-inter">&lt;/&gt;</span>Buildify-Web
                </a>
                </div>
                
                {/* Center-aligned copyright text */}
                <p className="order-3 md:order-none text-gray-500 text-center md:flex-1">
                &copy; {new Date().getFullYear()} Dr.LOKI's Dental & Orthodontic Centre
                </p>
                
                {/* Right-aligned links */}
                <div className="order-2 md:mr-0 flex space-x-6">
                <a href="#" className="text-gray-500 hover:text-lime-500 transition-colors duration-200 text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-500 hover:text-lime-500 transition-colors duration-200 text-sm">Terms of Service</a>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;