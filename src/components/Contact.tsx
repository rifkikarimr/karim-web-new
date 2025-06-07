import React, { useState } from 'react';
import { Mail, Linkedin, Send, MapPin, Phone } from 'lucide-react';
import { ContactForm } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your next cloud project? Let's connect and explore how we can build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                I'm always open to discussing new opportunities, innovative projects, 
                or simply sharing knowledge about cloud engineering and best practices.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <a href="mailto:your.email@example.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                    your.email@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Linkedin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">LinkedIn</h4>
                  <a href="https://linkedin.com/in/yourprofile" className="text-blue-600 hover:text-blue-800 transition-colors">
                    linkedin.com/in/yourprofile
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600">Available for remote work worldwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project or question..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>

              {submitMessage && (
                <div className="text-green-600 font-semibold text-center bg-green-50 py-3 rounded-lg">
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;