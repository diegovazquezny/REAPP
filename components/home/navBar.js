// TODO: fix list coming in from top left corner in mobile 

import { useRef, useState } from 'react';
import styles from '../../styles/MobileNav.module.css';
import DehazeIcon from '@material-ui/icons/Dehaze';
import CloseIcon from '@material-ui/icons/Close';

export default function MobileNav() {
  const listRef = useRef();
  const [showNav, setShowNav] = useState(false);
  
  const hideList = (e) => {
    listRef.current.style.top = '-50vh';
    setShowNav(false);
  }

  const handleNav = (e) => {
    if (!showNav) {
      listRef.current.style.top = '60px';
      setShowNav(true);
    } else {
      hideList();
    }
  }

  return (
    <nav className={styles.root}>
      <div className={styles.logo}>Brian's Logo</div>
      <input type="checkbox" id="click" className={styles.click}/>
      <label htmlFor="click" className={styles.menuBtn}>
        {showNav
          ? <CloseIcon onClick={handleNav} className={styles.bars}/>
          : <DehazeIcon onClick={handleNav} className={styles.bars}/>
        }
      </label>
      <ul className={styles.list} ref={listRef}> 
        <li className={styles.listItem}><a href="#" className={styles.listItemLink} onClick={hideList}>ABOUT ME</a></li>
        <li className={styles.listItem}><a href="#" className={styles.listItemLink} onClick={hideList}>SOMETHING ELSE</a></li>
        <li className={styles.listItem}><a href="#" className={styles.listItemLink} onClick={hideList}>CONTACT ME</a></li>
      </ul>
    </nav>
  );
}