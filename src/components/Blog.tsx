import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/portfolio';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technical <span className="text-blue-600">Blog</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sharing insights, best practices, and lessons learned from real-world cloud engineering experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100 overflow-hidden cursor-pointer group"
            >
              <div className="p-8">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{post.date}</span>
                  <Clock className="h-4 w-4 ml-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">{post.snippet}</p>

                <div className="flex items-center justify-between pt-4 border-t border-blue-200">
                  <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 group-hover:translate-x-1 transform">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View All Posts
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;