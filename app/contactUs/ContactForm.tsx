"use client";

import { useState } from "react";
import styles from "./contactUs.module.css";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [status, setStatus] = useState<null | "idle" | "loading" | "success" | "error">( "idle" );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg(null);

    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value.trim(),
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
    };

    // Basic client validation
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg("Please fill name, email and message.");
      setStatus("error");
      return;
    }

    try {
      // Example POST — create /api/contact on server to persist
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Network error");

      setStatus("success");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.message || "Something went wrong. Please try again.");
    } finally {
      // return to idle after short delay so button becomes usable — purely UI
      setTimeout(() => setStatus("idle"), 2500);
    }
  }

  return (
    <div className={styles.formCardInner}>
      <h2 className={styles.cardTitle}>Send us a message</h2>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.field}>
          <input id="name" name="name" type="text" required autoComplete="name" />
          <label htmlFor="name">Your name</label>
        </div>

        <div className={styles.field}>
          <input id="email" name="email" type="email" required autoComplete="email" />
          <label htmlFor="email">Email</label>
        </div>

        <div className={styles.field}>
          <input id="phone" name="phone" type="tel" autoComplete="tel" />
          <label htmlFor="phone">Phone (optional)</label>
        </div>

        <div className={styles.field}>
          <textarea id="message" name="message" rows={4} required />
          <label htmlFor="message">Message</label>
        </div>

        <motion.button
          type="submit"
          className={styles.button}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.98 }}
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : status === "success" ? "Sent ✓" : "Send Message"}
        </motion.button>

        {status === "error" && errorMsg && <p className={styles.formError}>{errorMsg}</p>}
      </form>
    </div>
  );
}
