import React from 'react';
import { Cloud, Mail, Linkedin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Cloud className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold font-mono">CloudEngineer</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Building scalable, reliable cloud infrastructure across AWS, GCP, and Azure. 
              Passionate about DevOps, SRE, and automation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              {['About', 'Experience', 'Projects', 'Certifications', 'Blog', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.querySelector(`#${item.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="space-y-3">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Mail className="h-5 w-5 mr-3" />
                your.email@example.com
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5 mr-3" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 CloudEngineer Portfolio. Built with React & Tailwind CSS.
          </p>
          
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;