// App.tsx
import { useEffect, useState, useContext } from 'react';
import AppRoutes from '../Routes/Routes';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from '../../styles/index.module.css'
import { getCategories } from '../../features/categories/categoriesSlice';
import { useAppDispatch } from '../../features/hookDispatch';
import { CartProvider } from '../Basket/CartContext';
import SearchBar from '../SearchBar/SearchBar'; // Импортируйте SearchBar
import CartContext from '../Basket/CartContext';

const App = () => {
  const dispatch = useAppDispatch();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch]);

  return (
    <CartProvider>
      <div className={styles.app}>
        <Header onSearchClick={() => setIsSearchOpen(prev => !prev)} />
        {isSearchOpen && (
          <div
            className={styles.searchModal}
            onClick={() => setIsSearchOpen(false)}
          >
            <div
              className={styles.searchContainer}
              onClick={e => e.stopPropagation()} // Не даём всплывать клику из окна поиска!
            >
              <SearchBarWrapper onClose={() => setIsSearchOpen(false)} />
            </div>
          </div>
        )}
        <div className='container'>
          {/* Здесь может быть ваш основной контент */}
        </div>
        <AppRoutes />
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </CartProvider>
  );
};

export default App;

// Вынесем отдельный компонент-обёртку для SearchBar, чтобы получить addToCart из контекста
const SearchBarWrapper = ({ onClose }: { onClose: () => void }) => {
  const context = useContext(CartContext);
  if (!context) return null;
  return <SearchBar addToCart={context.addToCart} onClose={onClose} />;
};
