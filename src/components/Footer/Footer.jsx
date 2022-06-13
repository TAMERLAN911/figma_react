import React from 'react';
import img from '../../img/Group 6 1.svg'
import css from './footer.module.css';

const Footer = () => {
    return (
        <footer>
 <div className={css.logo}>
        <img src={img} alt='logo'/>
      </div>
      <div className={css.footerjies}>
        <a href="#0">Партнерам</a>
        <a href="#0">Разработчикам</a>
        <a href="#0">Вакансии</a>
      </div>
      <div className={css.intoCode}>ООО "интукод", 2020г.</div>
</footer>
    )
}

export default Footer