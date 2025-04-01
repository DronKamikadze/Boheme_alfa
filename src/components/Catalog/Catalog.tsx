import { useEffect, useState } from 'react';
import styles from '../../styles/Catalog.module.css';
import { ITEMS } from '../data';
import Sidebar from '../Sidebar/Sidebar';

const Catalog = () => {
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
  const style = Array.from(new Set(ITEMS.map(item => item.style)));

  useEffect(() => {
    const newFilteredItems = ITEMS.filter(item => {
      return (
        (filters.collection.length === 0 || (item.collection && filters.collection.includes(item.collection))) &&
        (filters.style.length === 0 || (item.style && filters.style.includes(item.style)))
      );
    });
    setFilteredItems(newFilteredItems);
  }, [filters]);

  const handleFilterChange = (
    filterType: keyof Filters, // Тип ключа строго соответствует ключам Filters
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

  return (
    <div className={styles.catalogContainer}>
      <Sidebar
        collections={collections}
        style={style}
        onFilterChange={handleFilterChange}
      />
      <div className={styles.catalogContent}>
        <div className={styles.catalog}>
          {filteredItems.map(item => (
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
                <a href="#" className={styles.card__article}>
                  Артикул: {item.article}
                </a>
                <button className={styles.card__add}>
                    <img src="src/assets/Buy.png" alt="Корзина"/>
                    {item.price} ₽
                  </button>


              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
