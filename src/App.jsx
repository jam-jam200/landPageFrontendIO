import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar/Navbar";
import styles from "./style";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX}`}>
        <div>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
    </div>
  );
}

export default App;
