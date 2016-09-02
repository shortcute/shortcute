import React from 'react';

import styles from "./style.css";

class PenPencilIcon extends React.Component {
  render() {
    return (
      <svg className={styles.icon} width="48" height="48" viewBox="0 0 48 48">
        <path d="M47.6 4.6L31.8 24 43 35v.2h.2l4.6 11.2c.2.4 0 .8-.2 1-.2.3-.5.4-.7.4h-.5l-11-4.7c-.2 0-.3 0-.4-.2L24.8 32.7l-5 6c-.2.3-.5.4-.7.4h-1.3L16 44.3c-.2.4-.5.6-.8.7l-14 3H1c-.3 0-.5 0-.7-.3-.2-.2-.3-.6-.3-1l3-14c0-.3.3-.5.7-.7L9 30.3V29c0-.3 0-.6.3-.8l6-5L5 13l-3.2-3v-.2h-.2C.6 8.6 0 7 0 5.6s.6-3 1.6-4S4 0 5.6 0s3 .6 4 1.6v.2l3.2 3L24 16.2 43.3.3 44 0c2 0 4 2 4 4 0 .2-.2.5-.4.6zM45 45l-3-7.4-4.4 4.4 7.4 3zm-9.2-4l5-5-10.3-10.5L26 31l9.8 10zm-31-7.2l-2 10L7 39.6V39c0-1 1-2 2-2s2 1 2 2-1 2-2 2h-.5L4 45.2 14.3 43l1.6-4.7-6-6.2-5 1.8zM8.3 3.2H8C7 1.6 4.5 1.6 3 3c-.6.5-1 1.4-1 2.4s.4 2 1 2.5v.3h.2l2.4 2.4 5-5L8.4 3zM12 7l-5 5 10 10 5.4-4.6L12 7zm32.2-5L11 29.5v1l6.4 6.5h1L46 3.7c0-.8-.8-1.5-1.6-1.7z" fill="#000" fillRule="evenodd"/>
      </svg>
    );
  }
}

export default PenPencilIcon;