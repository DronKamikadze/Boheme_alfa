import React, { useEffect, useState, useRef } from 'react';
import styles from '../../styles/HomeProducts.module.css';
import { ITEMS } from '../data';

const HomeProducts: React.FC = () => {
  const [items, setItems] = useState(ITEMS);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLUListElement>(null);

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

  return (
    <div className={styles.scroller} data-speed="fast">
      <ul className={styles.tag_list}>
        <ul className={styles.scroller__inner}>
          {items.map((item, index) => (
            <li key={index}>
              <div className={styles.card}>
                <div className={styles.card__top}>
                  <a href="#">
                    <img className={styles.card__image} src={item.image} alt={item.name} />
                  </a>
                </div>
                <div className={styles.card__bottom}>
                  <a href='#' className={styles.card__collection}>
                    {item.collection}
                  </a>
                  <a href='#' className={styles.card__artic}>
                    {item.article}
                  </a>
                  <button className={styles.card__add}>
                    <img src="src/assets/Buy.png" alt="Корзина"/>
                    {item.price}
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );


  
};

export default HomeProducts;