// Basket.tsx
import React, { useContext } from 'react';
import styles from '../../styles/Basket.module.css';
import CartContext from './CartContext';

const Basket = () => {
  const context = useContext(CartContext);

  if (!context) return <p>Корзина недоступна</p>;

  const { cartItems, handleRemoveFromCart, handleQuantityChange } = context;

  const totalCost = cartItems.reduce((acc, item) => {
    if (item.price !== undefined) {
      return acc + item.price * item.quantity;
    }
    return acc;
  }, 0);

  return (
    <div className={styles.cart}>
      <h2 className={styles.h2}>Корзина</h2>
      {cartItems.length === 0 ? (
        <h2 className={styles.h2}>Корзина пуста</h2>
      ) : (
        <ul className={styles.ul}>
          {cartItems.map(item => (
            <div key={item.article} className={styles.card}>
                <div className={styles.card__top}>
                  <a href="#">
                    <img
                      className={styles.card__image}
                      src={item.image}
                      alt={item.name}
                    />
                  </a>
                </div>
                <div className={styles.card__bottom}>
                  <a href="#" className={styles.card__name}>
                    {item.name}
                  </a>
                  <a href="#" className={styles.card__price}>
                    Цена: {item.price} ₽
                  </a>
                  <a href="#" className={styles.card__article}>
                    Артикул: {item.article}
                  </a>
                <div className={styles.quantity__controls}>
                    <button
                        className={styles.quantity__button}
                        onClick={() => handleQuantityChange(item.article, item.quantity + 1)}
                    >
                        <img className={styles.quantity__button} src ='src/assets/plus.svg'></img>
                    </button>


                    <span className={styles.quantity__value}>{item.quantity}</span>

                    <button
                        className={styles.quantity__button}
                        onClick={() => handleQuantityChange(item.article, item.quantity - 1)}
                    >
                        <img className={styles.quantity__button} src ='src/assets/minus.svg'></img>
                    </button>
                    
                </div>
                
                
                <button
                  className={styles.delete__button}
                  onClick={() => handleRemoveFromCart(item.article)}
                >
                  <img className={styles.quantity__button} src ='src/assets/krest.svg'></img>
                </button>
                
                
                </div>
              </div>
          ))}
        </ul>
      )}


      {cartItems.length > 0 && (
        <div className={styles.footer__container}>
          <div className={styles.total__price__box}>
            Итого: {totalCost} ₽
          </div>
          <button className={styles.card__registration}>
            Оформить заказ
          </button>
        </div>
      )}
    </div>
  );
};

export default Basket;
