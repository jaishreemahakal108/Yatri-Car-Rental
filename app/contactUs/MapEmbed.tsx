"use client";

import styles from "./contactUs.module.css";

export default function MapEmbed() {
  return (
    <div className={styles.mapCard}>
      <iframe
        width="100%"
        height="350"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14229.927680088929!2d81.0268209!3d26.8197712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd1dcfaaae9f%3A0x82b4cba3d99cd8f1!2sGolf%20City%2C%20Bagiamau%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1732490000000"
      />
    </div>
  );
}
