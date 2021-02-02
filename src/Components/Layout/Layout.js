import React from 'react';
import styles from './layout.module.css';

const Layout = ({ id, title = 'title', descr, urlBg, colorBg }) => {
  return (
    <section
      className={styles.root}
      style={{
        backgroundImage: urlBg !== undefined ? urlBg : '',
        backgroundColor: colorBg !== undefined ? colorBg : '',
      }}
      id={
        id !== undefined
          ? id
          : console.error('No id provided for component Layout')
      }>
      <div className={styles.wrapper}>
        <article>
          <div className={styles.title}>
            <h3>
              {title !== undefined
                ? title
                : console.error('No title provided for component Layout')}
            </h3>
            <span className={styles.separator}></span>
          </div>
          <div className={styles.desc + styles.full}>
            <p>
              {descr !== undefined
                ? descr
                : console.error('No description provided for component Layout')}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
