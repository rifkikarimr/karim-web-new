import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '../data/portfolio';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-blue-600">Certifications</span> & Credentials
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Committed to continuous learning and staying current with the latest cloud technologies and best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100 relative overflow-hidden"
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  cert.status === 'earned' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {cert.status === 'earned' ? 'Certified' : 'Achieved'}
                </span>
              </div>

              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 pr-16">{cert.name}</h3>
                  <p className="text-blue-600 font-semibold">{cert.issuer}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200">
                  <a href="https://www.credly.com/users/rifki-karim-ramadhan">View Details</a>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </button>
              </div>

              {/* Background Pattern */}
              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5">
                <div className="w-full h-full bg-blue-600 rounded-full transform translate-x-16 translate-y-16"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 italic">
            * Certifications marked "Achieved" represent achievements for 2023 and 2024
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;