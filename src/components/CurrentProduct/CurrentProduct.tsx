import { useLocation } from 'react-router-dom';
import styles from '../../styles/SingleProduct.module.css';
import CartContext from '../Basket/CartContext';
import { useContext } from 'react';

const CurrentProduct = () => {
  const context = useContext(CartContext);
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return <div>Товар не найден</div>;
  }

  if (context) {
    const { cartItems, addToCart, handleQuantityChange } = context;
    const currentCartItem = cartItems.find(item => item.article === product.article);

    return (
      <div className={styles.main}>
        <div className={styles.product__container}>
          <h1 className={styles.product__title}>{product.name}</h1>
          <div className={styles.product__body}>
            <div className={styles.product__gallery}>
              <img
                src={product.image}
                alt={product.name}
                className={styles.product__image}
              />
            </div>
            <div className={styles.product__info}>
              <div className={styles.product__meta}>
                <div className={styles.product__article}>
                  Артикул: {product.article}
                </div>
                <div className={styles.product__price}>
                  {product.price} ₽
                </div>

                {/* Кнопка/счетчик корзины */}
                {currentCartItem ? (
                  <div className={styles.product__cartControls}>
                    <button
                      className={styles.product__qtyBtn}
                      onClick={() => handleQuantityChange(product.article, currentCartItem.quantity - 1)}
                      disabled={currentCartItem.quantity <= 0}
                    >-</button>
                    <span className={styles.product__qty}>{currentCartItem.quantity}</span>
                    <button
                      className={styles.product__qtyBtn}
                      onClick={() => handleQuantityChange(product.article, currentCartItem.quantity + 1)}
                    >+</button>
                  </div>
                ) : (
                  <button
                    className={styles.product__add}
                    onClick={() => addToCart(product)}
                  >
                    Добавить в корзину
                  </button>
                )}

                <div className={styles.product__dimensions}>
                  <div>Габариты: {product.width} x {product.length} x {product.height} мм.</div>
                  <div>Вес: {product.weight} г</div>
                </div>
                <div className={styles.product__other}>
                  <div>Цвет: {product.color}</div>
                  <div>Коллекция: {product.collection}</div>
                  <div>Стиль: {product.style}</div>
                  {product.brand && <div>Бренд: {product.brand}</div>}
                  {product.base_material && <div>Материал: {product.base_material}</div>}
                  {product.control && <div>Управление: {product.control}</div>}
                  {product.view && <div>Назначение: {product.view}</div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default CurrentProduct;
