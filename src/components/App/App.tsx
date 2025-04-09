
import React, { useEffect } from 'react';
import AppRoutes from '../Routes/Routes';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import styles from '../../styles/index.module.css'
import { getCategories } from '../../features/categories/categoriesSlice';
import { useAppDispatch } from '../../features/hookDispatch';
import { CartProvider } from '../Basket/CartContext';


const App = () =>{

  const dispatch = useAppDispatch();

  useEffect(() =>{
    dispatch(getCategories())

  }, [dispatch])


  return(
    <CartProvider> {/* Оберните приложение в CartProvider */}
      <div className={styles.app}>
        <Header />
        <div className='container'>
        </div>
        <AppRoutes />
        <Footer />
      </div>
    </CartProvider>
  )
};
    
export default App
