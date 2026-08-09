interface experienceGroup {
  name: string;
  company: string;
  period: string;
  overview: string[];
  skills: string[];
}

interface skillsGroup {
  category: string;
  content: string[];
}

export const EXPERIENCES: experienceGroup[] = [
  {
    name: 'Backend Engineer',
    company: 'Backbase',
    period: 'Jan 2026 - Current',
    overview: [
      'Designed and implemented scalable REST APIs and microservices, ensuring seamless data flow and optimal performance for front-end client applications.',
      'Streamlined deployment processes in cloud environments (Azure/AKS).',
      'Partnered with Frontend and Mobile engineers to design and implement robust APIs.',
      'Collaborate with cross-functional teams (Solution Architects, Business Analysts and clients) to provide backend perspective.',
      'Manage project releases, including version bumps, configuration changes and release documentation.',
      'Optimize microservice reliability through proactive Grafana monitoring and comprehensive root-cause analysis of system failures.'
    ],
    skills: [
      'Spring Boot',
      'Java',
      'SQL',
      'Azure Kubernetes Service',
      'Docker',
      'REST APIs',
      'Microservices',
      'Grafana',
      'ArgoCD'
    ],
  },
  {
    name: 'Application Developer',
    company: 'Oracle',
    period: 'May 2025 - Aug 2025',
    overview: [
      'Enhanced user experience and overall stability for the Oracle Expense Fusion application.',
      'Optimized data flow to the front-end by troubleshooting and resolving REST API endpoint issues using Postman',
      'Boosted cross-team efficiency by documenting technical standards, test cases, and bug resolutions in Confluence.'
    ],
    skills: ['Java', 'JavaScript', 'Linux', 'Oracle ADF', 'Docker', 'REST APIs'],
  },
  {
    name: 'Web Technical Lead',
    company: 'NXP Semiconductors',
    period: 'Jul 2024 - Apr 2025',
    overview: [
      'Partnered closely with UX designers to create and iterate mockups in Figma for upcoming web projects.',
      'Developed responsive, high-performing user interfaces using React and Bootstrap, integrated seamlessly with a custom Java/Spring Boot backend.',
      'Led data mining projects by querying and analyzing data from Teradata and a PostgreSQL database.',
      'Developed a Spring Boot application using Java 21 to scrape data from NXP.com, and its UI using React and Bootstrap.',
      'Improved data pipelines using Python to extract data from APIs, transform, format, and save the data into a PostgreSQL database.',
      'Led the development and maintenance of an internal automation tool using Java 17, Spring Boot, and Selenium',
      'Mentored and trained junior team members, leading technical discussions and promoting continuous improvement'
    ],
    skills: [
      'Java',
      'Spring Boot',
      'JavaScript',
      'React',
      'Bootstrap',
      'Python',
      'Selenium',
      'PostgreSQL',
      'Teradata'
    ],
  },
  {
    name: 'Web Publisher and Operations',
    company: 'NXP Semiconductors',
    period: 'Nov 2020 - Jun 2024',
    overview: [
      'Collaborated closely with business stakeholders to gather and translate web requirements into actionable digital experiences.',
      'Translated UX designs into scalable, reusable, and production-ready front-end components using HTML5, CSS3, JavaScript, and React.',
      'Designed and developed a custom Chrome extension utilizing React and Node.js, delivering out-of-the-box UI solutions.',
      'Mined data from databases, warehouses, and APIs. Generated reports and delivered actionable insights for web teams and business lines.',
      'Developed a Spring Boot application using Java 17 and Selenium to automate repetitive tasks in the publishing processes.',
      'Built a web application using PHP 8 and JavaScript to generate detailed Excel reports on web assets, extracting their data from Teradata, and sending the reports through email.',
      'Streamlined application delivery by deploying web services and scripts through Docker containers in a Linux environment.'
    ],
    skills: [
      'Java',
      'Spring Boot',
      'JavaScript',
      'React',
      'CSS3',
      'HTML5',
      'Python',
      'Selenium',
      'PostgreSQL',
    ],
  },
  {
    name: 'IT Technical Support Specialist',
    company: 'Tata Consultancy Services',
    period: 'Jun 2019 - Nov 2020',
    overview: [
      'Collaborated with stakeholders to resolve ServiceNow incidents, identifying root cause and implementing fixes in Java 8 and PHP 7 web applications.',
      'Created runbooks for every production deployment that I made to maintain standardization and consistency.',
      'Participated in code reviews, testing code changes in QA and UAT environments.',
      'Resolved issues with SQL queries in MySQL and SQL Server.',
      'Participated in an Agile team to develop new modules and features, providing estimated time, blockers, and next steps during Scrum ceremonies.',
      'Understand business requirements based on user stories and work along with business analysts to resolve doubts/questions.',
      'Efficiently resolved IT tickets in ServiceNow, meeting SLA commitments and ensuring prompt issue resolution.'
    ],
    skills: ['Java', 'JavaScript', 'CSS3', 'JSP', 'PHP', 'MySQL', 'Windows Server 2012', 'Tomcat'],
  },
] as const;

export const SKILLS: skillsGroup[] = [
  {
    category: 'Frontend',
    content: [
      'JavaScript',
      'React',
      'Next.js',
      'HTML5',
      'CSS3',
      'Redux',
      'Bootstrap',
      'Tailwind',
      'TypeScript',
      'JQuery',
    ],
  },
  {
    category: 'Backend & Data',
    content: [
      'Java',
      'Spring Boot',
      'Node.js',
      'Express.js',
      'Maven',
      'Docker',
      'Kubernetes',
      'REST APIs',
      'Python',
      'ETL Pipelines',
      'Microservices',
      'Kafka',
      'PHP',
    ],
  },

  {
    category: 'DevOps & Tooling',
    content: [
      'Git',
      'Github',
      'Bitbucket',
      'AWS',
      'Azure',
      'Vercel',
      'Jira',
      'ServiceNow',
      'Figma',
      'Grafana',
      'ArgoCD',
    ],
  },
  {
    category: 'Databases',
    content: [
      'SQL',
      'PostgreSQL',
      'SQL Server',
      'Teradata',
      'MySQL',
      'MongoDB',
    ],
  },
  {
    category: 'Testing & QA',
    content: ['JUnit', 'Postman', 'Jest', 'Selenium'],
  },
];
