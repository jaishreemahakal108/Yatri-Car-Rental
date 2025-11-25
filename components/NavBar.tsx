"use client";
import { useEffect, useState } from "react";
import { UserButton } from "@clerk/nextjs";
import styles from "./NavBar.module.css";
import Link from "next/link";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      
      {/* Logo */}
      <video
        src="/yatri-logo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className={styles.logo}
      />

      {/* Menu Items */}
      <div className={styles.navItems}>
        <Link href="/"><h2 className={styles.menuItem}>Home</h2></Link>
        <Link href="/aboutUs"><h2 className={styles.menuItem}>About Us</h2></Link>
        <Link href="/contactUs"><h2 className={styles.menuItem}>Contact Us</h2></Link>
        <Link href="/booknow"><h2 className={styles.menuItem}>Book Now</h2></Link>
      </div>

      {/* User Button */}
      <div className={styles.userBtnWrapper}>
        <UserButton
          appearance={{
            elements: {
              avatarBox: { width: "55px", height: "55px" },
            },
          }}
        />
      </div>
    </div>
  );
};

export default NavBar;
