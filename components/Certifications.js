import styles from '../styles/modules/certifications.module.scss';

// importing certifications images
import excel from '../img/certifications/microsoft-excel.jpg';
import git from '../img/certifications/git-version-control.jpg';
import postgresql from '../img/certifications/postgreSQL.png';
import mongodb from '../img/certifications/MongoDB-basics.jpg';
import react_certf from '../img/certifications/react.jpg';
import powerbi_beginner from '../img/certifications/powerbi-beginner-course.png';
import powerbi_security_data from '../img/certifications/data-security-powerbi.png';

import CertificationItem from './CertificationItem';

const Certifications = props => {
  const bg_color =
    props.theme == 'light'
      ? styles.certifications_box_light
      : styles.certifications_box_dark;

  return (
    <div className={styles.certifications}>
      <h2 className={styles.subtitle}>My Certifications (7)</h2>
      <h4 className={styles.h4}>Click on an image to expand it and click it again to minimize it</h4>
      <section className={styles.certifications_container}>

        <CertificationItem
          image={powerbi_security_data}
          bg_color={bg_color}
          title="Data Security in Power BI"
          description="This course provides the most important information regarding data security while using Power BI."
          dueDate="March 2023"
        />
        <CertificationItem
          image={powerbi_beginner}
          bg_color={bg_color}
          title="Power BI Beginner´s Course"
          description="This course provides the basics of Power BI from setting up till sharing reports and dashboards."
          dueDate="March 2023"
          isReversed
        />
        <CertificationItem
          image={react_certf}
          bg_color={bg_color}
          title="React - The Complete Guide including Hooks, React Router and Redux"
          description="Build powerful, fast, user-friendly and reactive web apps. Provide amazing user experiences by leveraging the power of JavaScript with ease."
          dueDate="Dec 2021"
        />
        <CertificationItem
          image={mongodb}
          bg_color={bg_color}
          isReversed
          title="M001: MongoDB Basics"
          description="Learn the basics of NoSQL Databases and start working with MongoDB Atlas, collections, aggregations and more."
          dueDate="Oct 2021"
        />
        <CertificationItem
          image={postgresql}
          bg_color={bg_color}
          title="PostgreSQL Essential Training"
          description="Learn the basics of PostgreSQL and how to start using it with your web applications."
          dueDate="Sep 2021"
        />
        <CertificationItem
          image={git}
          bg_color={bg_color}
          isReversed
          title="Git Training"
          description="Working with Github to upload your code remotely. Working with branches and resolving conflicts and fully understand version control with Git."
          dueDate="Jul 2021"
        />
        <CertificationItem
          image={excel}
          bg_color={bg_color}
          title="Microsoft Excel"
          description="Master Microsoft Excel from Beginner to Advanced. Harness the full power of Microsoft Excel by automating your day to day tasks through Macros and VBA."
          dueDate="May 2021"
        />
      </section>
    </div>
  );
};

export default Certifications;
