// CurrentProduct.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../../styles/SingleProduct.module.css';

const CurrentProduct = () => {
  const location = useLocation();
  const product = location.state?.product; // Получаем объект товара

  if (!product) {
    return <div>Товар не найден</div>;
  }

  return (
    <div className={styles.main}>
      <div className={styles.product__container}>
        {/* Левая колонка: изображение */}
        <div className={styles.product__gallery}>
          <img
            src={product.image}
            alt={product.name}
            className={styles.product__image}
          />
        </div>

        {/* Правая колонка: информация */}
        <div className={styles.product__info}>
          <h1 className={styles.product__title}>{product.name}</h1>
          
          <div className={styles.product__meta}>
            <div className={styles.product__article}>
              Артикул: {product.article}
            </div>
            <div className={styles.product__price}>
              {product.price} ₽
            </div>
          </div>

          <div className={styles.product__description}>
            <h3>Описание</h3>
            <p>
              Здесь будет подробное описание товара. 
              Можно добавить характеристики, материалы, размеры и т.д.
            </p>
          </div>

          <button className={styles.product__add}>
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default CurrentProduct;
