import { useState } from 'react';
import { ITEMS, Item } from '../data';
import styles from '../../styles/SearchBar.module.css';
import { ROUTES } from '../../utils/routes';
import { Link } from 'react-router-dom';



const SearchBar = ({ 
    addToCart,
    onClose 
  }: { 
    addToCart: (item: Item) => void;
    onClose: () => void;
  }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<Item[]>([]);
  
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      const term = e.target.value.toLowerCase();
      setSearchTerm(term);
      setSearchResults(ITEMS.filter(item => item.name.toLowerCase().includes(term)));
    };
  
    return (
    <div className={styles.searchContainer}>
      <div className={styles.searchHeader}>
        <input
          type="text"
          placeholder="Поиск товаров..."
          value={searchTerm}
          onChange={handleSearch}
          className={styles.searchInput}
          autoFocus
        />
        <button onClick={onClose} className={styles.closeButton}>
          ×
        </button>
      </div>
      
      <div className={styles.searchResults}>
        {searchResults.map(item => (
          <div key={item.article} className={styles.card}>
            <div className={styles.card__top}>
              <Link
                to={ROUTES.SINGLEPRODUCT + '/' + item.article}
                state={{ product: item }}
                className={styles.card__name}
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

              <div className={styles.card__price}>
                Цена: {item.price} ₽
              </div>

              <div className={styles.card__article}>
                Артикул: {item.article}
              </div>

              <button
                className={styles.addToCartBtn}
                onClick={() => addToCart(item)}
              >
                В корзину
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
