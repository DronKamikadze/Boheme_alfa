import React from 'react';

import styles from '../../styles/Footer.module.css'
import { ROUTES } from '../../utils/routes';
import { Link } from 'react-router-dom';


const Footer = () =>{
  return(
  <section className={styles.footer}>

    <div className={styles.footer_content_container}>
      <div className={styles.footer_content_block}>
        <div className={styles.logo}>
          <Link className={styles.logo} to={ROUTES.HOME}>
            BOHEME
          </Link>
      </div>

        <div className={styles.socials}>
          <Link className={styles.socials} to={ROUTES.HOME}>
            <img className={styles.img}src='src/assets/Message square.svg'></img>
            zakaz@boheme.su
          </Link>
        </div>

        <div className={styles.socials}>
          <Link className={styles.socials} to={ROUTES.HOME}>
            <img className={styles.img}src='src/assets/Phone.svg' ></img>
            88005553535
          </Link>
            
        </div>

        <div className={styles.socials}>
          <Link className={styles.socials} to={ROUTES.HOME}>
            <img className={styles.img}src='src/assets/Telegram.svg'></img>
            Наш телеграм
          </Link>
          
        </div>
        
      </div>

      <div className={styles.footer_content_block}>
        <ul className={styles.footer_menu_items}>
          <li className={styles.footer_menu_item}><a href="#">Компания</a></li>
          <li className={styles.footer_menu_item}><a href="#" >Новости</a></li>
          <li className={styles.footer_menu_item}><a href="#">Способы оплаты</a></li>
        </ul>

      </div>

      <div className={styles.footer_content_block}>
        <ul className={styles.footer_menu_items}>
          <li className={styles.footer_menu_item}><a href="#">Как сделать заказ</a></li>
          <li className={styles.footer_menu_item}><a href="#" >Доставка</a></li>
          <li className={styles.footer_menu_item}><a href="#">Возврат товара</a></li>
        </ul>
      </div>

      <div className={styles.footer_content_block}>
        <ul className={styles.footer_menu_items}>
          <li className={styles.footer_menu_item}><a href="#">Для регионов</a></li>
          <li className={styles.footer_menu_item}><a href="#" >Сотрудничество</a></li>
          <li className={styles.footer_menu_item}><a href="#">Контакты</a></li>
        </ul>
      </div>
    </div>






    

    

    <div className={styles.rights}>
    © Boheme - Все права защищены.
    </div>

  </section>
  )
};
    
export default Footer
