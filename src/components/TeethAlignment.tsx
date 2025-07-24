import React from 'react';
import { Star, Award, Users, CheckCircle } from 'lucide-react';

const TeethAlignmentSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-green-50 py-16 sm:py-20 px-8 sm:px-10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-green-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-500 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 items-center">

          {/* Right Content - Image (shown first on mobile) */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative bg-gradient-to-br from-green-400 to-green-600 rounded-3xl p-6 sm:p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white rounded-2xl p-4 sm:p-6 transform -rotate-3">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <img 
                    src="/assets/teeth-alignment.jpg" 
                    alt="Perfect aligned smile - Dr. Loki's dental work"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-green-600 font-bold text-xs md:text-sm ">
                    Perfect Alignment
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Icons */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-xl">
              <Star className="w-8 h-8 text-yellow-400 fill-current" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-500 rounded-full p-4 shadow-xl">
              <Users className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Left Content - Text (shown second on mobile) */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                <Award className="w-4 h-4 mr-2" />
                Orthodontic Specialists
              </div>

              <h2 className="text-4xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Crooked Teeth
                <span className="block text-green-500">Stealing Your</span>
                <span className="block text-gray-900">Confidence?</span>
              </h2>

              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                Don't let misaligned teeth hold you back from showing the world your beautiful smile. 
                At Dr. Loki's, we're the <span className="font-semibold text-green-600">orthodontic alignment experts</span> who've 
                transformed thousands of smiles with precision, care, and cutting-edge techniques.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Advanced 3D imaging for precise treatment planning</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Invisible aligners & traditional braces available</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Personalized treatment plans for fastest results</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="https://wa.me/919840184964?text=I%20would%20like%20to%20Schedule%20a%20Free%20Teeth%20Alignment%20Consultation">
              <button className="group bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Get Your Free Alignment Consultation
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
              </a>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TeethAlignmentSection;
