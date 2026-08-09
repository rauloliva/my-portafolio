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
      'Develop Spring Boot applications in a microservices architecture using Java 21, adhering to SOLID principles, code coverage compliance, and best practices.',
      'Implement microservice communication using both synchronous (REST APIs) and asynchronous (Azure Service Bus) approaches to ensure efficient data flow.',
      'Streamline the deployment and management of containerized services in Azure Kubernetes Service (AKS) to optimize environment stability.',
      'Collaborate with cross-functional teams (Solution Architects, Business Analysts and clients) to provide backend perspective and provide technical solutions.',
      'Manage project releases, including version bumps, configuration changes and release documentation.',
      'Optimize microservice reliability through proactive Grafana monitoring and comprehensive root-cause analysis of system failures.',
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
    ],
  },
  {
    name: 'Application Developer',
    company: 'Oracle',
    period: 'May 2025 - Aug 2025',
    overview: [
      'Improved Oracle Expense Fusion application stability by resolving legacy code bugs,enhancing user experience and reliability with Java 8 and Oracle ADF.',
      'Resolved issues with Rest API endpoints, testing them using Postman, and provided clear documentation explaining the bug, test case scenarios, and resolution.',
      'Documented bug resolutions in Confluence, ensuring seamless knowledge transferand efficient future maintenance.',
    ],
    skills: ['Oracle ADF', 'Java', 'JavaScript', 'Linux', 'Docker'],
  },
  {
    name: 'Web Technical Lead',
    company: 'NXP Semiconductors',
    period: 'Jul 2024 - Apr 2025',
    overview: [
      'Led data mining projects by querying and analyzing data from Teradata and a PostgreSQL database to provide insightful information to stakeholders for their decision-making processes.',
      'Developed a Spring Boot application using Java 21 to crawl and scrape data from NXP.com, and its UI using React and Bootstrap to provide users a way to create reports based on crawled data.',
      'Developed data pipelines using Python to extract data from APIs, transform and format the data, and load it into a PostgreSQL database.',
      'Enabled dynamic visualization and reporting through Microsoft Power BI dashboards.',
      'Led the development and maintenance of an internal automation tool using Java 17, Spring Boot, and Selenium to continuously automate complex Content Management System processes.',
      'Mentored and trained junior team members, fostering their professional growth.',
      'Partnered with UX designers to create mockups in Figma for upcoming projects and demos.',
    ],
    skills: [
      'Java',
      'Spring Boot',
      'JavaScript',
      'React',
      'Python',
      'Selenium',
      'PostgreSQL',
    ],
  },
  {
    name: 'Web Publisher and Operations',
    company: 'NXP Semiconductors',
    period: 'Nov 2020 - Jun 2024',
    overview: [
      'Partnered with business lines to gather and translate web requirements into actionable updates for NXP.com, ensuring alignment with organizational goals and web guidelines.',
      'Mined data from databases, warehouses, and APIs. Generated reports and delivered actionable insights for web teams and business lines, aiding strategic decisions.',
      'Developed a Spring Boot application using Java 17 and Selenium to automate repetitive tasks in the publishing processes, web asset cleanups, and fixing static content.',
      'Designed and developed a Chrome extension using React and Node.js to offer various tools and out-of-the-box solutions for daily publishing operations in one place.',
      'Translated UX designs into reusable and functional front-end components using HTML, JS, CSS, and React.',
      'Built a web application using PHP 8 and JavaScript to generate detailed Excel reports on web assets, extracting their data from Teradata, and sending the reports through email.',
      'Deployed web applications, services, and scripts through Docker containers in a Linux environment.',
    ],
    skills: [
      'Java',
      'Spring Boot',
      'JavaScript',
      'React',
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
      'Created runbooks for every production deployment that I made to maintain standardization, consistency, and foster better coordination between developers and IT.',
      'Participated in code reviews, testing code changes in QA and UAT environments, provided and received feedback through Bitbucket, created pull requests, and reviewed commits with Git.',
      'Resolved issues with SQL queries in MySQL and SQL Server, testing them in QA and UAT instances, and requesting approval for production deployment.',
      'Participated in an Agile team to develop new modules and features, providing estimated time, blockers, and next steps during Scrum ceremonies (dailies, planning, reviews, and refinements) to ensure transparent progress.',
      'Understand business requirements based on user stories and work along with business analysts to resolve doubts/questions.',
      'Efficiently resolved IT tickets in ServiceNow, meeting SLA commitments and ensuring prompt issue resolution.',
    ],
    skills: ['Java', 'JavScript', 'PHP', 'MySQL', 'JSP'],
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
