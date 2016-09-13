import React from 'react';
import styles from "./style.css";

class Contact extends React.Component {
  render() {
    return (
        <div className={styles.contact}>
          <div className={styles.content}>
            <div className={styles.contactText}>
              <h1>Contact us</h1>
              <p>If you want to bla bla bla please click here</p>
              <a href='mailto:hi@shortcute.xyz' className={styles.btn}>email us</a>
            </div>
          </div>
        </div>
      );
    }
  }

export default Contact;