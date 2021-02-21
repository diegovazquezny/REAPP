// TODO: fix list coming in from top left corner in mobile

import { useRef, useState } from "react";
import styles from "../../styles/MobileNav.module.css";
import DehazeIcon from "@material-ui/icons/Dehaze";
import CloseIcon from "@material-ui/icons/Close";

export default function MobileNav() {
  const listRef = useRef();
  const [showNav, setShowNav] = useState(false);

  const hideList = (e) => {
<<<<<<< HEAD
    listRef.current.style.top = "-50vh";
=======
    listRef.current.style.left = '-50vh';
>>>>>>> main
    setShowNav(false);
  };

  const handleNav = (e) => {
    if (!showNav) {
<<<<<<< HEAD
      listRef.current.style.top = "60px";
=======
      listRef.current.style.left = '0px';
      listRef.current.style.top = '60px';
>>>>>>> main
      setShowNav(true);
    } else {
      hideList();
    }
  };

  return (
    <nav className={styles.root}>
<<<<<<< HEAD
      <div className={styles.logo}>Brian's Logo</div>
      <input type="checkbox" id="click" className={styles.click} />
=======
      <div className={styles.logo}>
        <a href="/">
          Brian's Logo
        </a>
      </div>
      <input type="checkbox" id="click" className={styles.click}/>
>>>>>>> main
      <label htmlFor="click" className={styles.menuBtn}>
        {showNav ? (
          <CloseIcon onClick={handleNav} className={styles.bars} />
        ) : (
          <DehazeIcon onClick={handleNav} className={styles.bars} />
        )}
      </label>
<<<<<<< HEAD
      <ul className={styles.list} ref={listRef}>
        <li className={styles.listItem}>
          <a href="/about" className={styles.listItemLink} onClick={hideList}>
            ABOUT ME
          </a>
        </li>
        <li className={styles.listItem}>
          <a href="#" className={styles.listItemLink} onClick={hideList}>
            SOMETHING ELSE
          </a>
        </li>
        <li className={styles.listItem}>
          <a href="/contact" className={styles.listItemLink} onClick={hideList}>
            CONTACT ME
          </a>
        </li>
=======
      <ul className={styles.list} ref={listRef}> 
        <li className={styles.listItem}><a href="/search" className={styles.listItemLink} onClick={hideList}>SEARCH</a></li>
        <li className={styles.listItem}><a href="/about" className={styles.listItemLink} onClick={hideList}>ABOUT ME</a></li>
        <li className={styles.listItem}><a href="/contact" className={styles.listItemLink} onClick={hideList}>CONTACT ME</a></li>
>>>>>>> main
      </ul>
    </nav>
  );
}
