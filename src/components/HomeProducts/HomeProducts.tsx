import React, { useEffect, useState, useRef, useContext } from 'react';
import styles from '../../styles/HomeProducts.module.css';
import { ITEMS } from '../data';
import CartContext from '../Basket/CartContext';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

const HomeProducts: React.FC = () => {
  const [items, setItems] = useState(ITEMS);
  const context = useContext(CartContext);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);

  function addAnimation(): void {

    const scrollers = document.querySelectorAll(`.${styles.scroller}`) as NodeListOf<HTMLElement>;
    
    scrollers.forEach((scroller: HTMLElement) => {
      scroller.setAttribute("data-animated", "true");
      const scrollerInner = scroller.querySelector(`.${styles.scroller__inner}`) as HTMLElement;
      const scrollerContent = Array.from(scrollerInner.children) as HTMLElement[];
      scrollerContent.forEach((item: HTMLElement) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        duplicatedItem.setAttribute('aria-hidden', 'true');
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }

  if(context){
    const { handleAddToCart, cartItems } = context;
    return (
        <div className={styles.scroller} data-speed="fast">
          <ul className={styles.tag_list}>
            <ul className={styles.scroller__inner}>
              {items.map((item, index) => (
                <li key={index}>
                  <div className={styles.card}>
                    <div className={styles.card__top}>

                      <Link
                        to={ROUTES.SINGLEPRODUCT + '/' + item.article} 
                        state={{ product: item }}
                      >
                        <img className={styles.card__image} src={item.image} alt={item.name} />
                      </Link>

                  
                    </div>
                    <div className={styles.card__bottom}>
                      <Link
                        to={ROUTES.SINGLEPRODUCT + '/' + item.article} 
                        state={{ product: item }}
                        className={styles.card__collection}
                      >
                        {item.collection}
                      </Link>

                      <Link
                        to={ROUTES.SINGLEPRODUCT + '/' + item.article} 
                        state={{ product: item }}
                        className={styles.card__artic}
                      >
                        {item.article}
                      </Link>
                    
                      {cartItems.some(i => i.article === item.article) ? (
                    <button className={styles.card__add}
                      onClick={() => handleAddToCart({
                        article: item.article,
                        name: item.name,
                        price: item.price,
                        quantity: 1,
                        image: item.image
                      })}
                    >
                      <img src="src/assets/Buy.png" alt="Корзина" />
                      {cartItems.find(i => i.article === item.article)?.quantity}
                    </button>
                  ) : (
                    <button className={styles.card__add}
                      onClick={() => handleAddToCart({
                        article: item.article,
                        name: item.name,
                        price: item.price,
                        quantity: 1,
                        image: item.image
                      })}
                    >
                      <img src="src/assets/Buy.png" alt="Корзина" />
                      {item.price} ₽
                    </button>
                    )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </ul>
        </div>
      );

  }
  
};

export default HomeProducts;