import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Rifki Karim Ramadhan
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-600 mb-8 font-mono">
            <span className="text-blue-600 font-semibold">Multi-Cloud</span> |{' '}
            <span className="text-blue-600 font-semibold">DevOps</span> |{' '}
            <span className="text-blue-600 font-semibold">SRE Specialist</span>
          </div>

          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Architecting scalable, reliable infrastructure across AWS, GCP, and Azure. 
            Specializing in automation, observability, and cloud-native solutions that drive business success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('#projects')}
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            
            <button
              onClick={() => scrollToSection('#contact')}
              className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Contact Me
              <Download className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-blue-100 rounded-lg transform rotate-12 opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 bg-blue-200 rounded-full opacity-30"></div>
      <div className="absolute top-1/2 left-5 w-12 h-12 bg-blue-300 rounded-lg transform -rotate-12 opacity-40"></div>
    </section>
  );
};

export default Hero;