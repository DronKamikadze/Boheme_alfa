import React, { useContext, useState } from 'react';

import styles from '../../styles/Header.module.css'
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import CartContext from '../Basket/CartContext';
import SearchBar from '../SearchBar/SearchBar';


type HeaderProps = {
  onSearchClick: () => void;
};

const Header: React.FC<HeaderProps> = ({ onSearchClick }) => {

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const context = useContext(CartContext);

  if (!context) return <div>Контекст корзины не доступен</div>;
  const { cartItems, addToCart } = context;

  
  return(
  <div className={styles.header}>

  {isSearchOpen && (
        <div className={styles.searchModal}>
          <div className={styles.searchModalContent}>
            <SearchBar 
              addToCart={addToCart}
              onClose={() => setIsSearchOpen(false)}
            />
          </div>
        </div>
      )}
    
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
      <Link to={ROUTES.BASKET} className={styles.cart__link}>
        <img src='src/assets/Shopping bag.svg'></img>
        {cartItems.length > 0 && (
          <span className={styles.cart__badge}>{cartItems.length}</span>
        )}
      </Link>
      </li>

      <li className={styles.menu_item}>
        <img
          src='src/assets/Search.svg'
          alt="Поиск"
          className={styles.menu_icon}
          onClick={onSearchClick}
          style={{ cursor: 'pointer' }}
        />
      </li>
      
    </ul>
  </div>
  )
};


export default Header
