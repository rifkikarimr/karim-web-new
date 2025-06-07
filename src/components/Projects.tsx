import React from 'react';
import { ExternalLink, Code, TrendingUp } from 'lucide-react';
import { projects } from '../data/portfolio';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing impactful cloud infrastructure projects that drive business value and technical excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{project.name}</h3>
                    <span className="text-sm text-blue-600 font-medium">Project {String(index + 1).padStart(2, '0')}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-blue-200 pt-6">
                  <div className="flex items-start mb-4">
                    <TrendingUp className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 mb-2 uppercase tracking-wide">Impact & Outcome</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">{project.outcome}</p>
                    </div>
                  </div>
                </div>

                {project.link && (
                  <div className="mt-6 pt-6 border-t border-blue-200">
                    <a
                      href={project.link}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
                    >
                      View Project
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;