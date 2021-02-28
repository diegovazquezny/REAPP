// TODO: fix list coming in from top left corner in mobile

import { useRef, useState } from "react";
import styles from "../../styles/MobileNav.module.css";
import DehazeIcon from "@material-ui/icons/Dehaze";
import CloseIcon from "@material-ui/icons/Close";

export default function MobileNav() {
  const listRef = useRef();
  const [showNav, setShowNav] = useState(false);

  const hideList = (e) => {
    listRef.current.style.left = "-100vw";
    setShowNav(false);
  };

  const handleNav = (e) => {
    if (!showNav) {
      listRef.current.style.left = "0px";
      listRef.current.style.top = "90px";
      setShowNav(true);
    } else {
      hideList();
    }
  };

  return (
    <nav className={styles.root}>
      <div className={styles.logo}>
        <a href="/">Brian J Han</a>
      </div>
      <input type="checkbox" id="click" className={styles.click} />
      <label htmlFor="click" className={styles.menuBtn}>
        {showNav ? (
          <CloseIcon onClick={handleNav} className={styles.bars} />
        ) : (
          <DehazeIcon onClick={handleNav} className={styles.bars} />
        )}
      </label>
      <ul className={styles.list} ref={listRef}>
        <li className={styles.listItem}>
          <a href="/search" className={styles.listItemLink} onClick={hideList}>
            SEARCH
          </a>
        </li>
        <li className={styles.listItem}>
          <a
            href="/testimonials"
            className={styles.listItemLink}
            onClick={hideList}
          >
            TESTIMONIALS
          </a>
        </li>
        <li className={styles.listItem}>
          <a href="/about" className={styles.listItemLink} onClick={hideList}>
            ABOUT ME
          </a>
        </li>
        <li className={styles.listItem}>
          <a href="/contact" className={styles.listItemLink} onClick={hideList}>
            CONTACT ME
          </a>
        </li>
        <li className={styles.listItem}>
          <a
            href="/calculator"
            className={styles.listItemLink}
            onClick={hideList}
          >
            MORTGAGE CALCULATOR
          </a>
        </li>
      </ul>
    </nav>
  );
}
