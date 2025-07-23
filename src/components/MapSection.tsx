import React from 'react';
import { MapPin, Clock, Phone, Mail, Navigation } from 'lucide-react';

const MapSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Visit Our Location
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're conveniently located and ready to serve you. Drop by anytime during business hours or schedule an appointment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            {/* Address Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Address</h3>
                  <p className="text-gray-600 leading-relaxed">
                    123 Business Street<br />
                    Suite 456<br />
                    City, State 12345<br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Hours</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-medium text-red-500">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Phone className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Call Us</h4>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-3">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Mail className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email Us</h4>
                    <p className="text-gray-600">hello@company.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Get Directions Button */}
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-8 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
              <Navigation className="w-5 h-5" />
              <span>Get Directions</span>
            </button>
          </div>

          {/* Right Column - Map */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="aspect-w-16 aspect-h-12 rounded-xl overflow-hidden">
                <div className="relative w-full h-96 bg-gray-100 rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl"
                  ></iframe>
                  
                  {/* Map Overlay for Trust */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-700">We're Open Now</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map Caption */}
              <div className="mt-4 text-center">
                <p className="text-gray-600 text-sm">
                  Easily accessible location with ample parking available
                </p>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold">5+</div>
                <div className="text-xs opacity-90">Years Serving</div>
                <div className="text-xs opacity-90">This Community</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Elements */}
        <div className="mt-16 grid sm:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center space-y-3">
            <div className="bg-blue-100 p-4 rounded-full">
              <MapPin className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Prime Location</h3>
            <p className="text-gray-600 text-sm">Centrally located for your convenience</p>
          </div>
          
          <div className="flex flex-col items-center space-y-3">
            <div className="bg-green-100 p-4 rounded-full">
              <Clock className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Flexible Hours</h3>
            <p className="text-gray-600 text-sm">Extended hours to fit your schedule</p>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-2xl">
            <div className="flex flex-col items-center space-y-2">
              <div className="text-3xl font-bold">★★★★★</div>
              <div className="font-semibold">Trusted by 500+ Customers</div>
              <div className="text-sm opacity-90">Rated excellent on Google Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;