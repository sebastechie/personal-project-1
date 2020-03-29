import React from 'react';

import styles from './App.module.scss';
// import Home from '../../components/Home';
import Navbar from '../../components/Navbar';
import Routes from '../../routes';
import Footer from '../../components/Footer/Footer';

function App() {
  return (
    <section className={styles.App}>
      <div>

        <Navbar />
        <Routes />
        
        <Footer />
      </div>

      {/* <div className={styles.sideFill}>
        <div className={styles.fillItems}>
          <div>F</div>
          <div>F</div>
          <div>F</div>
        </div>
      </div> */}

    </section>
  );
}

export default App;
