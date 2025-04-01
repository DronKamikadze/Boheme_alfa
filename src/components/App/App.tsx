
import React, { useEffect } from 'react';
import AppRoutes from '../Routes/Routes';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import styles from '../../styles/index.module.css'
import { getCategories } from '../../features/categories/categoriesSlice';
import { useAppDispatch } from '../../features/hookDispatch';


const App = () =>{

  const dispatch = useAppDispatch();

  useEffect(() =>{
    dispatch(getCategories())

  }, [dispatch])


  return(
    <div className={styles.app}>
      <Header></Header>
      <div className='container'>
      
      </div>
      <AppRoutes></AppRoutes>
      <Footer></Footer>
    
    </div>
  )
};
    
export default App
