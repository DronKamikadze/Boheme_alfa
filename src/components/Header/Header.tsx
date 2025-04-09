import React from 'react';

import styles from '../../styles/Header.module.css'
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

const Header = () =>{
  return(
  <div className={styles.header}>
    <ul className={styles.menu_items}>
      <li className={styles.menu_item}>
        <Link to={ROUTES.ABOUT}>
          <img src ='src/assets/info.svg'></img>
        </Link>

      </li>

      <li className={styles.menu_item}>
        <Link to={ROUTES.CATALOG}>
          <img src='src/assets/catalog.svg'></img>
        </Link>
  
      </li>

      <li className={styles.menu_item}>
      <Link to={ROUTES.HOME}>
        <div>BOHEME</div>
      </Link>
      
      </li>
      
      <li className={styles.menu_item}>
        <Link to={ROUTES.BASKET}>
          <img src='src/assets/Shopping bag.svg'></img>
        </Link>
      </li>
      <li className={styles.menu_item}>
      <Link to={ROUTES.HOME}>
        <img src='src/assets/Search.svg'></img>
      </Link>
        
      </li>
    </ul>
  </div>
  )
};
    
export default Header
