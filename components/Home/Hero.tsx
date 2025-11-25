import Image from "next/image";
import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      
      {/* Left Text Section */}
      <div className={styles.left}>
        <h1 className={styles.heading}>
          India's Leading One Way InterCity <br /> Cab Service Provider
        </h1>

        <h2 className={styles.subHeading}>Book the Car Now</h2>

        <button className={styles.exploreBtn}>Explore Cars</button>
      </div>

      {/* Right Image Section */}
      <div className={styles.right}>
        <Image 
          src="/01.png" 
          alt="Car Image" 
          width={500} 
          height={500}
          className={styles.heroImage}
        />
      </div>

    </div>
  );
};

export default Hero;