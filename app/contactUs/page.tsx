// import styles from "./contactUs.module.css";

// export default function ContactUs() {
//   return (
//     <main className={styles.container}>
      
//       {/* Hero */}
//       <section className={styles.hero}>
//         <h1 className={styles.title}>Contact Us</h1>
//         <p className={styles.subtitle}>
//           We're here to help you with bookings, support, or any queries.
//         </p>
//       </section>

//       {/* Contact Grid */}
//       <section className={styles.grid}>
//         {/* Contact Form */}
//         <div className={styles.formCard}>
//           <h2 className={styles.cardTitle}>Send us a message</h2>

//           <form className={styles.form}>
//             <label>Your Name</label>
//             <input type="text" placeholder="Enter your name" required />

//             <label>Email</label>
//             <input type="email" placeholder="Enter your email" required />

//             <label>Phone Number</label>
//             <input type="text" placeholder="Your phone number" />

//             <label>Message</label>
//             <textarea rows={4} placeholder="Write your message..." required />

//             <button type="submit" className={styles.button}>
//               Send Message
//             </button>
//           </form>
//         </div>

//         {/* Contact Info */}
//         <div className={styles.infoCard}>
//           <h2 className={styles.cardTitle}>Reach us at</h2>

//           <p><strong>📍 Address:</strong><br /> Lucknow, Uttar Pradesh, India</p>

//           <p><strong>📍 Website :</strong><br />  https://www.yatricabs.com </p>

//           <p><strong>📞 Phone:</strong><br /> 05224242796 </p>

//           <p><strong>📧 Email:</strong><br /> support@yatri.com</p>

//           <p><strong>⏰ Working Hours:</strong><br /> 24/7 Available</p>
//         </div>
//       </section>

//     </main>
//   );
// }

"use client";

import { motion } from "framer-motion";
import styles from "./contactUs.module.css";

export default function ContactUs() {
  return (
    <main className={styles.container}>
      
      {/* Hero Section */}
      <motion.section 
        className={styles.hero}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.subtitle}>
          We're here to help you with bookings, support, or any queries.
        </p>
      </motion.section>

      {/* Grid */}
      <section className={styles.grid}>
        
        {/* Contact Form */}
        <motion.div 
          className={styles.formCard}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className={styles.cardTitle}>Send us a message</h2>

          <form className={styles.form}>

            <div className={styles.field}>
              <input type="text" required />
              <label>Your Name</label>
            </div>

            <div className={styles.field}>
              <input type="email" required />
              <label>Email</label>
            </div>

            <div className={styles.field}>
              <input type="text" />
              <label>Phone Number</label>
            </div>

            <div className={styles.field}>
              <textarea rows={4} required></textarea>
              <label>Message</label>
            </div>

            <button type="submit" className={styles.button}>
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div 
          className={styles.infoCard}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className={styles.cardTitle}>Reach us at</h2>

          <div className={styles.infoItem}>
            <span>📍</span>
            <p>Lucknow, Uttar Pradesh, India</p>
          </div>

          <div className={styles.infoItem}>
            <span>🌐</span>
            <p>https://www.yatricabs.com</p>
          </div>

          <div className={styles.infoItem}>
            <span>📞</span>
            <p>05224242796</p>
          </div>

          <div className={styles.infoItem}>
            <span>📧</span>
            <p>support@yatri.com</p>
          </div>

          <div className={styles.infoItem}>
            <span>⏰</span>
            <p>24/7 Available</p>
          </div>

          {/* Map */}
          <div className={styles.mapWrapper}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14229.927680088929!2d81.0268209!3d26.8197712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd1dcfaaae9f%3A0x82b4cba3d99cd8f1!2sGolf%20City%2C%20Bagiamau%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1732490000000"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                >
            </iframe>

          </div>
        </motion.div>
      </section>

    </main>
  );
}
