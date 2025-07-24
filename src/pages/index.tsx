import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  FaTooth, FaUserMd, FaSmile, FaChild, FaStar, FaMoneyBillWave, 
  FaHeart, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp,
  FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaQuoteLeft,
  FaChevronLeft, FaChevronRight, FaStethoscope, FaShieldAlt,
  FaBaby, FaGem, FaTeeth, FaEye, FaCalendarCheck, FaAward,
  FaUsers, FaClock, FaHandHoldingHeart, FaCheckCircle, FaBars, FaTimes
} from 'react-icons/fa';

import { Award, Users, Clock, Shield, Heart } from 'lucide-react';
import Footer from "../components/Footer"
import ContactLocationSection from '../components/GetInTouch';
import TeethAlignmentSection from '../components/TeethAlignment';



const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const testimonials = [
    {
      img: "/assets/satish.png",
      name: "Sathish Gnanavelu",
      rating: 5,
      review: "Doctor mam clearly explain the teeth status and suggested tooth brush and paste found effective.Treatment found effective. Thanks.",
      weeks: "3 months ago"
    },
    {
      img:"/assets/sathya.png",
      name: "Sathya J",
      rating: 5,
      review: "Best experience ever I had. Dr.loki's so friendly and clearly explaining every doubts with patience.The Dentist is a great place to go for your dental care and health. Thank you Dr. Loki.",
      weeks: "11 months ago"
    },
    {
      img: "/assets/janani.png",
      name: "Janani Arumugam",
      rating: 5,
      review: "We went for wisdom tooth extraction, doctor made me feel comfortable & explained the situation clearly. Overall good experience.",
      weeks: "12 months ago"
    },
    {
      img: "/assets/bala.png",
      name: "Bala Subramanian",
      rating: 5,
      review: "Good ambiance and friendly consultation had a good experience",
      weeks: "12 months ago"
    }
  ];

  const services = [
    { name: "General Dentistry", icon: FaTooth, description: "Complete dental care including check-ups, cleanings, and preventive treatments" },
    { name: "Cosmetic Dentistry", icon: FaSmile, description: "Teeth whitening, veneers, and smile designing for a perfect smile" },
    { name: "Orthodontic Treatments", icon: FaTeeth, description: "Braces, aligners, and corrective treatments for perfect teeth alignment" },
    { name: "Prosthodontics", icon: FaGem, description: "Dental crowns, bridges, dentures and implants for complete smile restoration" },
    { name: "Endodontics", icon: FaStethoscope, description: "Root canal treatments and pulp therapy with advanced techniques" },
    { name: "Pediatric Dentistry", icon: FaChild, description: "Specialized dental care for children in a fun, comfortable environment" },
    { name: "Periodontics", icon: FaShieldAlt, description: "Gum disease treatment and prevention for optimal oral health" },
    { name: "Preventive Dental Care", icon: FaHeart, description: "Regular check-ups and cleanings to maintain healthy teeth and gums" },
    { name: "Smile Makeover Packages", icon: FaGem, description: "Complete smile transformation with customized treatment plans" }
  ];

  const whyChooseUs = [
    { icon: FaHeart, title: "Painless Treatments", description: "Advanced pain management techniques for comfortable procedures" },
    { icon: FaChild, title: "Kid-Friendly Care", description: "Specialized approach to make dental visits fun for children" },
    { icon: FaStar, title: "5-Star Ratings", description: "Consistently rated excellent by our satisfied patients" },
    { icon: FaMoneyBillWave, title: "Flexible Payment", description: "Flexible payment options to make quality dental care affordable and accessible for everyone." },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About us", href: "#about" },
    { name: "Our Doctor", href: "#doctor" },
    { name: "Services", href: "#services" },
    { name: "Contact us", href: "#contact" }
  ];

  return (
    <>
     <Head>
      <title>Dr. LOKI's Dental & Orthodontic Centre - Your Smile, Our Pride</title>
      <meta name="description" content="Premier dental care and orthodontic treatments in Chennai. Dr. Lokeshwari offers comprehensive dental services including cosmetic dentistry, orthodontics, and smile makeovers." />
      <meta name="keywords" content="dentist Chennai, orthodontist, dental clinic, teeth whitening, braces, dental implants, cosmetic dentistry, smile makeover, Dr Lokeshwari" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Dr. Lokeshwari" />
      <meta name="robots" content="index, follow" />

      <meta property="og:title" content="Dr. LOKI's Dental & Orthodontic Centre - Your Smile, Our Pride" />
      <meta property="og:description" content="Experience expert dental and orthodontic care in Chennai with Dr. Lokeshwari. Smile with confidence!" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://drlokis.in/" />
      <meta property="og:image" content="/assets/thumbnail.png" /> 


      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Dr. LOKI's Dental & Orthodontic Centre" />
      <meta name="twitter:description" content="Your trusted partner for dental and orthodontic treatments in Chennai." />
      <meta name="twitter:image" content="/assets/thumbnail.png" /> 

      <link rel="icon" type="image/png" href="/assets/white_logo_favicon.png" /> 

      <script src="https://cdn.tailwindcss.com"></script>
    </Head>


      
      <div className="min-h-screen bg-white font-inter">
        {/* Enhanced Navbar */}
        {/* Enhanced Navbar */}

        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white py-3 shadow-md' : 'bg-transparent py-6'}`}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      <div className="flex items-center">
        <img 
          src={scrolled ? '/assets/logo.png' : '/assets/white_logo.png'} 
          width={scrolled ? '150px' : '180px'}
          className="transition-all duration-500"
          alt="Dr. Loki's Dental Clinic Logo"
        />
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-lime-400 transition-colors duration-200 font-medium text-lg`}
          >
            {item.name}
          </a>
        ))}
        <a href="#contact">
          <button className="bg-lime-500 text-white px-6 py-2 rounded-full hover:bg-lime-600 transition-all duration-300 shadow-lg hover:shadow-lime-400/30 transform hover:scale-105 font-medium">
            Book Appointment
          </button>
        </a>
        
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-lime-400 focus:outline-none transition-colors duration-200`}
          aria-label="Toggle navigation menu"
        >
          {isNavOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Navigation */}
  {isNavOpen && (
    <div className="md:hidden bg-white shadow-xl">
      <div className="px-2 pt-2 pb-3 space-y-2">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="block px-3 py-3 text-gray-800 hover:text-lime-500 hover:bg-gray-50 rounded-md font-medium transition-colors duration-200 text-lg"
            onClick={() => setIsNavOpen(false)}
          >
            {item.name}
          </a>
        ))}
        <a href="#contact">
        <button className="w-full text-center bg-lime-500 text-white px-3 py-3 rounded-md hover:bg-lime-600 transition-all duration-300 font-medium shadow-md">
          Book Appointment
        </button>
        </a>
      </div>
    </div>
  )}
</nav>


        {/* Hero Section with Image and Overlayed Text */}
        <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
          {/* Hero Image Fullscreen */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/assets/hero_img_2.jpg"
              alt="Dr. Lokeshwari Hero"
              className="w-full h-full object-cover object-center brightness-60 scale-105 transition-transform duration-700 backdrop-blur-lg"
              style={{ filter: 'contrast(1.08) saturate(1.1) opacity(0.6)' }}
            />
            {/* Gradient overlay for style */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
          </div>
          {/* Text Overlay */}
          <div className="w-full h-full relative z-10 flex flex-col items-center justify-center text-center px-4 w-full backdrop-blur-sm">
            <h1 className="text-5xl md:text-7xl pt-20 mt-10 tracking-tight font-bold text-white font-poppins mb-6 drop-shadow-lg leading-tight ">
              Your Smile<br />
              <span className="text-lime-300">Our Pride</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed drop-shadow-md max-w-2xl mx-auto">
              To help you achieve the beautiful smile you've always desired with our expert dental care and personalized treatments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => window.location.href = '#contact'} className="bg-gradient-to-r from-lime-400 to-lime-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-lime-500 hover:to-lime-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-lime-400/25">
                Book Free Consultation
              </button>
              <button onClick={() => window.location.href = 'https://wa.me/919840184964?text=Hi%2C%20I%E2%80%99d%20like%20to%20book%20a%20dental%20appointment.'} className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 hover:border-white/50 transform hover:scale-105 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
          {/* Optional: Subtle border or shadow for extra polish */}
          <div className="absolute inset-0 pointer-events-none rounded-none md:rounded-3xl shadow-2xl md:m-8 border-0 md:border-8 border-white/10"></div>
        </section>

        {/* About Clinic Section */}
        <section id="about" className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 to-lime-50">
          <div className="absolute inset-0 opacity-10">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 800\"%3E%3Cpath d=\"M0,200 Q300,100 600,200 T1200,200 V800 H0 Z\" fill=\"%23C1D72F\" opacity=\"0.05\"/%3E%3Cpath d=\"M0,400 Q300,300 600,400 T1200,400 V800 H0 Z\" fill=\"%2310B981\" opacity=\"0.05\"/%3E%3C/svg%3E')"
              }}
            ></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative">
                <div className="w-full h-auto bg-gradient-to-br from-lime-400 to-emerald-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                   <img src={'/assets/clinic.png'} className={``}/>
                </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative">
                  <div className="absolute -inset-1"></div>
                  <div className="relative bg-white p-8 rounded-lg ">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-poppins mb-6 leading-tight">
                      Dr Loki's <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-emerald-500">Dental & Orthodontic Centre</span>
                    </h2>
                    <p className="text-gray-700 text-md leading-relaxed mb-6">
                      Dr. Loki's is your premier destination for exceptional dental care and orthodontic treatments. We are committed to providing multi-speciality treatments on all kinds of dental problems and maintaining the highest standards of professional ethics.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <FaCheckCircle className="text-lime-500 text-xl" />
                        </div>
                        <p className="ml-3 text-gray-700">Comprehensive dental care for the whole family</p>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <FaCheckCircle className="text-lime-500 text-xl" />
                        </div>
                        <p className="ml-3 text-gray-700">Advanced technology for precise diagnostics</p>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <FaCheckCircle className="text-lime-500 text-xl" />
                        </div>
                        <p className="ml-3 text-gray-700">Painless treatment options available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Meet the Doctor Section */}
        <section id="doctor" className="py-16 sm:py-20 px-4 sm:px-10 relative overflow-hidden bg-white">
          {/* Background SVG blob */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 800\"%3E%3Cpath d=\"M0,400 Q200,300 400,400 T800,400 Q1000,350 1200,400 V800 H0 Z\" fill=\"%23C1D72F\" opacity=\"0.1\"/%3E%3C/svg%3E')"
              }}
            ></div>
          </div>
            
          <div className="relative max-w-7xl mx-auto">
            {/* Section heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 font-poppins mb-4">
                Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-emerald-500">Dentist</span>
              </h2>
              <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-lime-400 to-emerald-500 mx-auto"></div>
            </motion.div>
            
            {/* Content grid */}
            <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 items-center">
              {/* Doctor Image - show first on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative order-1 lg:order-2"
              >
                <div className="relative z-10 text-center px-6 sm:px-8">
                  <img
                    src="/assets/dr_img.jpg"
                    alt="Dr. Lokeswari"
                    className="mx-auto w-48 sm:w-56 md:w-full rounded-full object-cover object-center shadow-xl"
                  />
                </div>
                <div className="absolute top-6 right-6 w-8 h-8 bg-lime-400/60 rounded-full animate-pulse"></div>
                <div className="absolute bottom-6 left-6 w-6 h-6 bg-emerald-400/60 rounded-full animate-bounce"></div>
              </motion.div>
            
              {/* Doctor Text Info - show second on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative order-2 lg:order-1"
              >
                <div className="relative bg-white p-6 sm:p-8 rounded-xl shadow-2xl border border-white/30">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 font-poppins mb-6">
                    Dr. <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-emerald-500">Lokeswari</span>
                  </h2>
                  <div className="mb-6 p-4 sm:p-6 bg-gradient-to-r from-lime-50 to-emerald-50 rounded-lg border border-lime-100">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">BDS, MDS</h3>
                    <p className="text-gray-700 text-sm sm:text-base">Orthodontics and Dentofacial Orthopedics</p>
                  </div>
                  <div className="space-y-3 sm:space-y-4 text-gray-700 mb-6 text-sm sm:text-base">
                    <div className="flex items-center">
                      <FaAward className="text-lime-500 mr-2 sm:mr-3 text-lg sm:text-xl" />
                      <span>Member in Dental Council of India</span>
                    </div>
                    <div className="flex items-center">
                      <FaAward className="text-lime-500 mr-2 sm:mr-3 text-lg sm:text-xl" />
                      <span>Member in Indian Orthodontic Society</span>
                    </div>
                    <div className="flex items-center">
                      <FaAward className="text-lime-500 mr-2 sm:mr-3 text-lg sm:text-xl" />
                      <span>Member in Indian Dental Association</span>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                    Dr. Lokeswari brings years of experience and expertise in comprehensive dental care. With a strong focus on delivering excellent patient care, she ensures every treatment is comfortable and effective.
                  </p>
                  <a href='https://wa.me/919840184964?text=Hi%2C%20I%E2%80%99d%20like%20to%20book%20a%20dental%20appointment.'>
                  <button className="w-full sm:w-auto bg-gradient-to-r from-lime-500 to-emerald-500 text-white px-6 py-3 rounded-full font-semibold hover:from-lime-600 hover:to-emerald-600 transition-all duration-300 shadow-lg">
                    Schedule a Consultation
                  </button>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>


       

        {/* Services Grid */}
        <section id="services" className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 to-lime-50">
          <div className="absolute inset-0 opacity-30">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 800\"%3E%3Cpath d=\"M0,300 Q400,200 800,300 Q1000,350 1200,300 V0 H0 Z\" fill=\"%23C1D72F\" opacity=\"0.1\"/%3E%3Cpath d=\"M0,500 Q400,400 800,500 Q1000,550 1200,500 V0 H0 Z\" fill=\"%2310B981\" opacity=\"0.1\"/%3E%3C/svg%3E')"
              }}
            ></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-poppins mb-4">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-emerald-500">Dental Services</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive dental care for all your oral health needs with the latest technology and techniques</p>
              <div className="w-24 h-1 bg-gradient-to-r from-lime-400 to-emerald-500 mx-auto mt-4"></div>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-lime-400/30 to-emerald-400/30 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-white rounded-2xl border border-gray-100 p-8 hover:border-lime-400/50 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="bg-gradient-to-br from-lime-100 to-emerald-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="text-2xl text-lime-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 font-poppins group-hover:text-lime-600 transition-colors duration-300">{service.name}</h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 mb-6 flex-grow">{service.description}</p>
                    <a href="https://wa.me/919840184964?text=Hi%2C%20I%E2%80%99d%20like%20to%20learn%20more%20about%20your%20dental%20Services">
                    <button className="text-lime-500 font-medium flex items-center group-hover:text-lime-600 transition-colors duration-300 mt-auto">
                      Learn more
                      <FaChevronRight className="ml-2 text-sm" />
                    </button>
                    </a>
                    
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-16">
              <a href="https://wa.me/919840184964?text=Hi%2C%20I%E2%80%99d%20like%20to%20learn%20more%20about%20your%20dental%20Services">
                <motion.button 
                  className="bg-gradient-to-r from-lime-500 to-emerald-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-lime-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-lime-400/25 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All Services
                </motion.button>
              </a>
            </div>
          </div>
        </section>


    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-poppins mb-4">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-emerald-500">Dr.LOKI's</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We're committed to providing exceptional dental care with a personal touch</p>
          <div className="w-24 h-1 bg-gradient-to-r from-lime-400 to-emerald-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/assets/clinic_img_2.jpg"
                alt="Modern dental office"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-lime-500 text-white p-4 rounded-full shadow-lg">
              <Award className="w-8 h-8" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-emerald-500 text-white p-4 rounded-full shadow-lg">
              <Heart className="w-8 h-8" />
            </div>
          </motion.div>

          {/* Right Side - Feature Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="bg-gradient-to-r from-lime-100 to-emerald-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="text-2xl text-lime-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 font-poppins group-hover:text-lime-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>

    <TeethAlignmentSection/>
  

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-br from-lime-500 to-emerald-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 800\"%3E%3Cpath d=\"M0,100 Q300,50 600,100 T1200,100 V800 H0 Z\" fill=\"%23FFFFFF\" opacity=\"0.1\"/%3E%3C/svg%3E')"
              }}
            ></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white font-poppins mb-4">
                Hear From <span className="text-yellow-200">Dr.Loki's Patients</span>
              </h2>
              <p className="text-lime-100 max-w-2xl mx-auto">Here's what our patients have to say about us</p>
              <div className="w-24 h-1 bg-white/50 mx-auto mt-4"></div>
            </motion.div>
            
            <div className="relative max-w-2xl mx-auto">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl p-8 shadow-2xl"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-lime-100 to-emerald-100 rounded-full flex items-center justify-center mr-4 shadow-sm">
                    <img src={testimonials[currentTestimonial].img} alt={testimonials[currentTestimonial].name} className="w-full h-auto"/>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonials[currentTestimonial].name}</h4>
                    <div className="flex items-center">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-sm" />
                      ))}
                      <span className="text-gray-500 ml-2 text-sm">{testimonials[currentTestimonial].weeks}</span>
                    </div>
                  </div>
                </div>
                <FaQuoteLeft className="text-lime-500 text-3xl mb-4 opacity-30" />
                <p className="text-gray-700 text-lg leading-relaxed mb-6">{testimonials[currentTestimonial].review}</p>
                <div className="flex justify-center space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full ${currentTestimonial === index ? 'bg-lime-500' : 'bg-gray-300'}`}
                    />
                  ))}
                </div>
              </motion.div>
              
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
              >
                <FaChevronLeft className="text-lime-500" />
              </button>
              
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
              >
                <FaChevronRight className="text-lime-500" />
              </button>
            </div>
          </div>
        </section>

        {/* Limited Time Offer */}
        <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between">
              <div className="text-center mb-6 md:mb-0">
                <h3 className="text-3xl font-bold text-gray-800 mb-2 font-poppins">
                  🎉 Limited Time Offer - 10% OFF
                </h3>
                <p className="text-gray-800 text-md mt-5">
                  Get 10% off on teeth cleaning or whitening services! 
                  <span className="font-bold"> Valid until August 1st , 2025</span>
                </p>
              </div>
              <a href="https://wa.me/919840184964?text=Claim%20my%2010%25%20Discount%20on%20all%20Dental%20Services">
                <button className="bg-gray-800 text-white px-8 py-3 rounded-full hover:bg-gray-900 transition-all duration-300 shadow-lg transform hover:scale-105 mt-4">
                   Claim Offer Now
                </button>

              </a>
              
            </div>
          </div>
        </section>

        <ContactLocationSection/>

        {/* Footer */}
        <Footer/>
        {/* Floating WhatsApp Button */}
        
        

        {/* Floating Appointment Button */}
        <motion.div 
          className="fixed bottom-6 right-6 z-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#contact" className="bg-gradient-to-r from-lime-500 to-emerald-500 text-white px-6 py-3 rounded-full shadow-xl hover:from-lime-600 hover:to-emerald-600 transition-all duration-300 flex items-center">
            <FaCalendarCheck className="mr-2" />
            Book Now
          </a>
        </motion.div>

        <motion.div 
          className="fixed bottom-24 right-6 z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a href="https://wa.me/919840184964?text=Hi%2C%20I%E2%80%99d%20like%20to%20book%20a%20dental%20appointment." target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition-all duration-300 flex items-center justify-center">
            <FaWhatsapp className="text-2xl" />
            <span className="ml-2 absolute bg-white text-green-500 text-xs font-bold px-2 py-1 rounded-full -top-2 -right-2 shadow-sm">24/7</span>
          </a>
        </motion.div>

        
      </div>

      <style jsx global>{`
  html, body {
    overflow-x: hidden;
    max-width: 100vw;
  }
`}</style>

    </>
  );
};

export default Home;