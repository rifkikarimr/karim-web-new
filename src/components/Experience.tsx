import React from 'react';
import { Calendar, MapPin, CheckCircle } from 'lucide-react';
import { experiences } from '../data/portfolio';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional <span className="text-blue-600">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering enterprise-scale cloud solutions with a focus on reliability, security, and performance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative">
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-32 bg-blue-200"></div>
              )}
              
              <div className="flex items-start mb-12">
                {/* Timeline Dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>

                {/* Content */}
                <div className="ml-8 flex-1">
                  <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{experience.title}</h3>
                        <div className="flex items-center text-blue-600 mb-2">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span className="font-semibold">{experience.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-600 bg-blue-50 px-4 py-2 rounded-lg">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="font-medium">{experience.period}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Responsibilities:</h4>
                      {experience.responsibilities.map((responsibility, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-700 leading-relaxed">{responsibility}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}  
        </div>
      </div>
    </section>
  );
};

export default Experience;