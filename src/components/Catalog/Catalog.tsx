import React, { useState, useEffect, useTransition, useContext } from 'react';
import styles from '../../styles/Catalog.module.css';
import { ITEMS } from '../data';
import Sidebar from '../Sidebar/Sidebar';
import Basket from '../Basket/Basket';
import CartContext from '../Basket/CartContext';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

const Catalog = () => {
  const context = useContext(CartContext);
  const [filteredItems, setFilteredItems] = useState(ITEMS);



  type Filters = {
    collection: string[];
    style: string[];
  };

  const [filters, setFilters] = useState<Filters>({
    collection: [],
    style: [],
  });

  const collections = Array.from(new Set(ITEMS.map(item => item.collection)));
  const stylesList = Array.from(new Set(ITEMS.map(item => item.style)));

  const [isPending, startTransition] = useTransition();

  
  

  useEffect(() => {
    startTransition(() => {
      const newFilteredItems = ITEMS.filter(item => {
        const collectionMatches = filters.collection.length === 0 || filters.collection.some(collection => item.collection === collection);
        const styleMatches = filters.style.length === 0 || filters.style.some(style => item.style === style);

        return collectionMatches && styleMatches;
      });
      setFilteredItems(newFilteredItems);
    });
  }, [filters]);

  const handleFilterChange = (
    filterType: keyof Filters,
    value: string,
    isChecked: boolean
  ) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: isChecked
        ? [...prevFilters[filterType], value]
        : prevFilters[filterType].filter(item => item !== value),
    }));
  };

  if (context) {
    const { handleAddToCart, cartItems } = context;

    return (
      <div className={styles.catalogContainer}>
        <Sidebar
          collections={collections}
          style={stylesList}
          onFilterChange={handleFilterChange}
        />

        <div className={styles.catalogContent}>
          <h4 className={styles.h4}>
            {filters.collection.length > 0 ? filters.collection.join(', ') : 'Выберите коллекцию'}
          </h4>
          {isPending && <p>Загрузка...</p>}
          <div className={styles.catalog}>
            {filteredItems.map(item => (
              <div key={item.article} className={styles.card}>
                <div className={styles.card__top}>

                  <Link
                    to={ROUTES.SINGLEPRODUCT + '/' + item.article} 
                    state={{ product: item }}
                    >
                    <img
                      className={styles.card__image}
                      src={item.image}
                      alt={item.name}
                    />
                  </Link>
                </div>
                <div className={styles.card__bottom}>
                  <Link
                    to={ROUTES.SINGLEPRODUCT + '/' + item.article} 
                    state={{ product: item }}
                    className={styles.card__name}
                    >
                    {item.name}
                  </Link>
                
                  <Link
                    to={ROUTES.SINGLEPRODUCT + '/' + item.article} 
                    state={{ product: item }}
                    className={styles.card__article}
                    >
                    Артикул: {item.article}
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
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default Catalog;
