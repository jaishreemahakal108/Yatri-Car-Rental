import styles from "./SearchInput.module.css";

const SearchInput = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>Let's Search What You Need</h2>

      <div className={styles.searchCard}>

        {/* LEFT — Location Input */}
        <div className={styles.inputBox}>

          {/* FIXED SVG PATH — Single line only */}
          <svg width="22" height="22" fill="#0c5952" viewBox="0 0 24 24">
            <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"/>
          </svg>

          <input 
            type="text" 
            placeholder="Pickup Location"
            className={styles.input}
          />
        </div>

        {/* RIGHT — Date Input */}
        <div className={styles.inputBox}>

          {/* FIXED SVG PATH */}
          <svg width="22" height="22" fill="#0c5952" viewBox="0 0 24 24">
            <path d="M19 4h-1V2h-2v2H8V2H6v2H5C3.9 4 3 4.9 3 6v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
          </svg>

          <input 
            type="date"
            className={styles.input}
          />
        </div>

      </div>
    </div>
  );
};

export default SearchInput;
