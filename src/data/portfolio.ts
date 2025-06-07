import { Project, Experience, Certification, BlogPost } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    name: 'Multi-Cloud Infrastructure Automation',
    description: 'Designed and implemented automated infrastructure deployment across AWS, GCP, and Azure using Terraform and CI/CD pipelines.',
    technologies: ['Terraform', 'AWS', 'GCP', 'Azure', 'GitHub Actions', 'Docker'],
    outcome: 'Reduced deployment time by 75% and eliminated manual configuration errors, serving 10M+ requests monthly.',
  },
  {
    id: '2',
    name: 'Observability Platform Implementation',
    description: 'Built comprehensive monitoring and alerting system using Prometheus, Grafana, and ELK stack for distributed microservices.',
    technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'Kubernetes', 'Kong API Gateway'],
    outcome: 'Improved system reliability to 99.9% uptime and reduced MTTR by 60% through proactive monitoring.',
  },
  {
    id: '3',
    name: 'Secure SFTP & Encryption Pipeline',
    description: 'Developed secure file transfer system with end-to-end encryption for sensitive data processing and SAP integration.',
    technologies: ['SFTP', 'AES Encryption', 'SAP', 'Python', 'AWS S3', 'Lambda'],
    outcome: 'Processed 1TB+ daily data transfers with zero security incidents and 99.95% success rate.',
  },
];

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Cloud Engineer',
    company: 'Agung Sedayu Group.',
    period: 'October 2024 - Present',
    responsibilities: [
      'Managed and operated multi-cloud environments across GCP, AWS, and Azure, each serving distinct functions such as serverless applications, data analytics, SAP operations, DevOps, and identity management (IdP & SSO).',
      'Acted as a DevOps and SRE specialist, ensuring the stability of resources, debugging errors, and responding promptly to alerts for efficient issue resolution.',
      'Collaborated with cross-functional teams to assist in troubleshooting and debugging cloud-related issues, including data ETL tools, network configurations, and application development environments.',
      'Contributed to the implementation of Kong API Management, Observability Tools (Prometheus, Grafana, ELK Stack.), and backup infrastructure automation using Terraform',
      'Facilitated new service requests, including server provisioning and resource allocation, for project-based needs in coordination with development and network teams.',
      'Participated in the SAP project, supporting the automation of file encryption and secure transfers via SFTP to enhance operational security and efficiency.',
      'Conducted monthly reviews of cloud infrastructure and security levels across all platforms to identify improvement areas and implement strategic enhancements.'
    ],
  },

  {
    id: '2',
    title: 'Cloud Architect',
    company: 'Smartnet Magna Global | Part of CTI Group.',
    period: 'May 2023 - October 2024',
    responsibilities: [
      'Conducted as a use case project manager in building framework for application modernization in google cloud platform needs.',
      'Advised clients on best practices for cloud migration, resulting in a successful migration of over 10+ virtual machines and other compute resources (Kubernetes & serverless) to the Google cloud platform, with minimal downtime',
      'Conducted as a use case project manager in building framework for application modernization in google cloud platform needs.',
      'Designed and implemented a cloud architecture that reduced application response time by 30%, thereby improving user experience and supporting the companys strategy to increase customer satisfaction.',
      'Providing solution proposal to stakeholders and customer on solution development processes, component, costs, and budgets.'
    ],
  },

  {
    id: '3',
    title: 'Web Developer',
    company: 'TedX UniversitasBrawijaya',
    period: 'Febuary 2021 - October 2021',
    responsibilities: [
      'Developed a responsive and user-friendly website, which contributed to increased user engagement and supported the digital marketing strategy using VueJS and Laravel',
      'Identified and resolved coding errors and bugs in a timely manner, resulting in a faster and more efficient website with improved functionality.'
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: '1',
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    status: 'placeholder',
  },
  {
    id: '2',
    name: 'Google Cloud Professional Engineer',
    issuer: 'Google Cloud',
    status: 'placeholder',
  },
  {
    id: '3',
    name: 'Azure Administrator Associate',
    issuer: 'Microsoft Azure',
    status: 'placeholder',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Mastering Multi-Cloud Architecture: Best Practices and Pitfalls',
    date: '2024-01-15',
    snippet: 'Exploring the complexities of managing infrastructure across multiple cloud providers and strategies for maintaining consistency...',
    readTime: '8 min read',
  },
  {
    id: '2', 
    title: 'Infrastructure as Code: Terraform vs. CloudFormation vs. ARM Templates',
    date: '2024-01-08',
    snippet: 'A comprehensive comparison of popular IaC tools and when to choose each for your cloud infrastructure needs...',
    readTime: '12 min read',
  },
  {
    id: '3',
    title: 'Building Resilient Systems: SRE Principles in Practice',
    date: '2024-01-01',
    snippet: 'How to implement Site Reliability Engineering practices to achieve 99.9% uptime and beyond in distributed systems...',
    readTime: '10 min read',
  },
];