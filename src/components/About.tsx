import React from 'react';
import { Cloud, Shield, Zap, Monitor, Code, Database } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    {
      icon: Cloud,
      title: 'Multi-Cloud Architecture',
      description: 'Expert in AWS, GCP, and Azure with focus on scalable, resilient infrastructure design.'
    },
    {
      icon: Zap,
      title: 'DevOps & Automation',
      description: 'Infrastructure-as-Code with Terraform, CI/CD pipelines, and deployment automation.'
    },
    {
      icon: Monitor,
      title: 'Observability & SRE',
      description: 'Prometheus, Grafana, ELK stack implementation for system reliability and monitoring.'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Secure data transfer, encryption, cloud security audits, and compliance frameworks.'
    },
    {
      icon: Code,
      title: 'Serverless & APIs',
      description: 'Serverless applications, API management with Kong, and microservices architecture.'
    },
    {
      icon: Database,
      title: 'Data & Integration',
      description: 'SAP systems integration, SFTP operations, and enterprise data pipeline management.'
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            I work across GCP, AWS, and Azure, focusing on scalable infrastructure, automation, and cloud reliability. 
            My expertise spans serverless applications, observability systems, infrastructure-as-code with Terraform, 
            API management, and secure data transfer protocols. I specialize in DevOps practices and Site Reliability 
            Engineering to ensure optimal uptime and system health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{skill.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;