import React from 'react'
import styles from "./style.js";

// import {Navbar,
//   Hero,
//   Stats,
//   Business,
//   Billing,
//   CardDeal,
//   Testimonials,
//   Clients,
//   CTA,
//   Footer
//  } from "./components";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import Business from "./components/Business.jsx";
import Billing from "./components/Billing.jsx";
import CardDeal from "./components/CardDeal.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Clients from "./components/Clients.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";

const App = () => (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          hello
          hellohellohellohellohellohellohellohello
        </div>
      </div>

        <div className={`bg-primary ${styles.flexStart}`}>
          // Main part on the top of the page
          <div className={`${styles.boxWidth}`}>
            < Hero />
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          // The remaining part 
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer />
          </div>
        </div>

    </div>
)

export default App 