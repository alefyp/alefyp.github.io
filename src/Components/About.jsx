import React from 'react';
import styles from './about.module.scss';

const About = (props) => {
  // eslint-disable-next-line react/prop-types
  const { id } = props;
  return (
    <div className={styles.section} id={id}>
      hello
    </div>
  );
};

export default About;
