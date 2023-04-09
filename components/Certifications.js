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
      <section className={styles.certifications_container}>

        <CertificationItem
          image={powerbi_security_data}
          bg_color={bg_color}
          title="Data Security in Power BI"
          description="This course provides the most important information regarding data security while using Power BI."
        />
        <CertificationItem
          image={powerbi_beginner}
          bg_color={bg_color}
          title="Power BI Beginner´s Course"
          description="This course provides the basics of Power BI from setting up till sharing reports and dashboards."
          isReversed
        />
        <CertificationItem
          image={react_certf}
          bg_color={bg_color}
          title="React - The Complete Guide including Hooks, React Router and Redux"
          description="Build powerful, fast, user-friendly and reactive web apps. Provide amazing user experiences by leveraging the power of JavaScript with ease."
        />
        <CertificationItem
          image={mongodb}
          bg_color={bg_color}
          isReversed
          title="M001: MongoDB Basics"
          description="Learn the basics of NoSQL Databases and start working with MongoDB Atlas, collections, aggregations and more."
        />
        <CertificationItem
          image={postgresql}
          bg_color={bg_color}
          title="PostgreSQL Essential Training"
          description="Learn the basics of PostgreSQL and how to start using it with your web applications."
        />
        <CertificationItem
          image={git}
          bg_color={bg_color}
          isReversed
          title="Git Training"
          description="Working with Github to upload your code remotely. Working with branches and resolving conflicts and fully understand version control with Git."
        />
        <CertificationItem
          image={excel}
          bg_color={bg_color}
          title="Microsoft Excel"
          description="Master Microsoft Excel from Beginner to Advanced. Harness the full power of Microsoft Excel by automating your day to day tasks through Macros and VBA."
        />
      </section>
    </div>
  );
};

export default Certifications;
