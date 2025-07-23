import React, { useState, useRef } from 'react';
import { MapPin, Phone, Navigation, Facebook, Instagram, Twitter, MessageCircle , Mail} from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  phone: string;
  service: string;
  date: string;
  message: string;
}

const ContactLocationSection: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;

    emailjs.sendForm(
      'service_d8fagvh', 
      'template_zz371s7',
      form.current,
      'kertkophtmzABcR7g'
    )
    .then((result) => {
      console.log('Email successfully sent!', result.text);
      alert('Your appointment request has been sent successfully!');
      setFormData({
        name: '',
        phone: '',
        service: '',
        date: '',
        message: ''
      });
    }, (error) => {
      console.log('Failed to send email:', error.text);
      alert('Failed to send your request. Please try again.');
    });
  };

  return (
    <>
      {/* Contact Form Section */}
      <section id="contact-section" className="py-20 bg-gradient-to-br from-gray-700 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 800\"%3E%3Cpath d=\"M0,100 Q300,50 600,100 T1200,100 V800 H0 Z\" fill=\"%23C1D72F\" opacity=\"0.05\"/%3E%3C/svg%3E')"
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">Touch</span>
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  Ready to transform your smile? Schedule your appointment today and take the first step towards better oral health.
                </p>
              </div>
              
              <div className="space-y-6">
                {/* Phone Contact */}
                <div className="flex items-start">
                  <div className="bg-lime-500 p-3 rounded-full mr-4">
                    <Phone className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Call Us</h4>
                    <p className="text-gray-300">+91 9840183964 / +91 9840184964</p>
                  </div>
                </div>
                
                {/* Map Section */}
                <div className="flex items-start">
                  <div className="bg-lime-500 p-3 rounded-full mr-4">
                    <MapPin className="text-white w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium mb-1">Visit Us</h4>
                    <p className="text-gray-300 mb-4">R-13, 3rd main road, Bharathi Salai, Nolambur Phase II, Mogappair West, Chennai</p>
                    
                    <div className="relative rounded-xl overflow-hidden shadow-xl border-2 border-lime-400/30 hover:border-lime-400/50 transition-all duration-300">
                      <iframe
                        src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Dr.LOKI%27s%20Dental%20%26%20Orthodontic%20Centre&t=h&z=14&ie=UTF8&iwloc=B&output=embed"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="block"
                        title="Dr. Loki's Dental & Orthodontic Centre Location"
                      />
                      
                      {/* Map Controls */}
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                          <span className="text-sm font-medium text-gray-700">Open Now</span>
                        </div>
                        
                        <a 
                          href="https://maps.google.com/maps?q=Dr.LOKI's+Dental+%26+Orthodontic+Centre"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-lime-500 hover:bg-lime-600 text-white text-sm font-medium rounded-lg px-3 py-2 transition-colors flex items-center shadow-md"
                        >
                          <Navigation className="w-4 h-4 mr-1" />
                          Directions
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Social Media Links */}
                <div className="flex space-x-4 pt-4">
                  <a href="#" className="bg-gray-600 hover:bg-gray-500 p-3 rounded-full transition-colors duration-200">
                    <Facebook className="text-white w-5 h-5" />
                  </a>
                  <a href="#" className="bg-gray-600 hover:bg-gray-500 p-3 rounded-full transition-colors duration-200">
                    <Instagram className="text-white w-5 h-5" />
                  </a>
                  <a href="mailto:hello@drlokis.in" className="bg-gray-600 hover:bg-gray-500 p-3 rounded-full transition-colors duration-200">
                    <Mail className="text-white w-5 h-5" />
                  </a>
                  <a href="https://wa.me/919840183964?text=Hi%2C%20I%E2%80%99d%20like%20to%20book%20a%20dental%20appointment.
" className="bg-gray-600 hover:bg-gray-500 p-3 rounded-full transition-colors duration-200">
                    <MessageCircle className="text-white w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right Column - Contact Form */}
            <div className="relative" id='contact'>
              <div className="absolute -inset-2 bg-gradient-to-r from-lime-400/30 to-emerald-400/30 rounded-xl blur-lg"></div>
              <div className="relative bg-white rounded-xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Schedule Your Visit</h3>
                <form ref={form} onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                        required
                      />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select Service</option>
                        <option value="general">General Dentistry</option>
                        <option value="cosmetic">Cosmetic Dentistry</option>
                        <option value="orthodontics">Orthodontics</option>
                        <option value="pediatric">Pediatric Dentistry</option>
                      </select>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                    />
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-lime-500 to-emerald-500 text-white py-4 rounded-lg font-semibold hover:from-lime-600 hover:to-emerald-600 transition-all duration-300 shadow-lg transform hover:scale-[1.02]"
                    >
                      Book My Appointment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactLocationSection;
