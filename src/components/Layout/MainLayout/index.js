import React from 'react';
import css from './main-layout.module.scss';
import routes from 'src/routes';
import Header from './Header';

const Layout = ({ children }) => {

  return (
    <div className={css.appLayout}>
      <Header/>
      <main className={css.main}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
