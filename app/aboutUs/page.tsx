import styles from "./aboutUs.module.css";

export default function AboutUs(){
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <h1 className={styles.title}>
              India's Leading One-Way InterCity Cab Service Provider
            </h1>
            <p className={styles.subtitle}>
              Cheaper than AC buses & trains • Doorstep pickup • Private, comfy
              journeys — Book reliable one-way cabs across India with driver.
            </p>

            <div className={styles.ctaRow}>
              <a className={styles.ctaPrimary} href="/booknow">
                Book a One-Way Ride
              </a>
              <a className={styles.ctaGhost} href="#why">
                Why Choose Yatri?
              </a>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.card}>
              <img
                src="/01.png"
                alt="Yatri cars collage"
                className={styles.heroImg}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="why" className={styles.whySection}>
        <h2 className={styles.sectionHeading}>Why choose a One-Way Cab?</h2>

        <div className={styles.features}>
          <article className={styles.featureCard}>
            <div className={styles.icon}>🚕</div>
            <h3>Save Time & Travel Private</h3>
            <p>
              Avoid bus/train schedules. Travel at your pace with a private,
              sanitized cab — perfect for family & group travel.
            </p>
          </article>

          <article className={styles.featureCard}>
            <div className={styles.icon}>💰</div>
            <h3>Cheaper Than AC Bus / 2-Tier Train</h3>
            <p>
              One-way car rental fares are often lower than per-seat AC bus or
              2-tier train fares, especially for groups and door-to-door trips.
            </p>
          </article>

          <article className={styles.featureCard}>
            <div className={styles.icon}>📍</div>
            <h3>Doorstep Pickup — End-To-End</h3>
            <p>
              We pick you up from home and drop you exactly where you need to
              go — no transfers, no waiting in stations.
            </p>
          </article>
        </div>

        <div className={styles.infoBlock}>
          <h4>Popular Routes</h4>
          <p className={styles.routes}>
            Lucknow → Gorakhpur | Varanasi → Ayodhya | Lucknow → Allahabad |
            Bareilly and more...
          </p>

          <div className={styles.longText}>
            <p>
              Our one-way taxi service is designed for comfort, affordability,
              and convenience. Book the cheapest one-way cab from Lucknow to
              Gorakhpur or Varanasi to Ayodhya and travel in privacy with a
              professional driver. We provide transparent pricing, GPS-based
              billing, and round-the-clock customer support.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.details}>
        <div className={styles.split}>
          <div className={styles.left}>
            <h3>Oneway Car Rental — What you get</h3>
            <ul>
              <li>Skilled chauffeurs with city & intercity experience</li>
              <li>GPS-based billing for fair transparent fares</li>
              <li>Well-maintained vehicles — sedans, SUVs, tempo travellers</li>
              <li>Multiple payment options & instant booking confirmation</li>
              <li>24/7 customer support for smooth journeys</li>
            </ul>
          </div>

          <div className={styles.right}>
            <img
              src="/02.png"
              alt="car and features"
              className={styles.sideImg}
            />
          </div>
        </div>

        <div className={styles.benefitGrid}>
          <div className={styles.benefit}>
            <img
              src="/03.png"
              alt="benefit 1"
            />
            <h4>For Any Budget</h4>
            <p>Hatchbacks to premium SUVs — choose a vehicle that fits your plan.</p>
          </div>
          <div className={styles.benefit}>
            <img
              src="/04.png"
              alt="benefit 2"
            />
            <h4>For Any Distance</h4>
            <p>Short city hops or long intercity routes — we cover both seamlessly.</p>
          </div>
          <div className={styles.benefit}>
            <div className={styles.iconBig}>⏱️</div>
            <h4>For Any Duration</h4>
            <p>Hourly, daily or one-way trips — flexible booking to match your needs.</p>
          </div>
        </div>
      </section>

      <section className={styles.ctaStrip} id="booking">
        <h3>Ready to book a comfortable one-way ride?</h3>
        <a className={styles.ctaPrimary} href="/booknow">
          Start Booking
        </a>
      </section>

      <section className={styles.testimonials}>
        <h2 className={styles.sectionHeading}>What our customers say</h2>
        <div className={styles.tCardRow}>
          <blockquote className={styles.tCard}>
            <p>
              "Booked a one-way cab from Lucknow to Gorakhpur — driver was
              punctual and very helpful. Smooth ride all the way."
            </p>
            <cite>— Rajesh K.</cite>
          </blockquote>

          <blockquote className={styles.tCard}>
            <p>
              "Transparent billing & good car. Much better than traveling by
              train for the family."
            </p>
            <cite>— Anjali M.</cite>
          </blockquote>

          <blockquote className={styles.tCard}>
            <p>
              "Excellent customer support and safe drivers. Will definitely use
              again."
            </p>
            <cite>— S. V.</cite>
          </blockquote>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>
          © {new Date().getFullYear()} Yatri Car Rental — Trusted One-Way Cab
          Services across India.
        </p>
      </footer>
    </main>
  );
}