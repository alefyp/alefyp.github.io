import React from 'react';
import styles from './contact.module.scss';

// eslint-disable-next-line react/prop-types
const Contact = ({ id }) => {
  return (
    <div className={styles.section} id={id}>
      <div className="div2">Alejandra Pérez Mondragón</div>
    </div>
  );
};

export default Contact;
