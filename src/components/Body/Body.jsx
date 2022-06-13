import React from "react";
import img from '../../img/0.svg'
import css from './body.module.css'


const Body = () => {
    return (
      <>
       <div className={css.mainBody}>
           <img src={img} alt='log' />
       </div> 
       
       <div className={css.buttons}>
      <button className={css.firstButton} type="submit">
        Увеличить
      </button>
      <button className={css.secondButton} type="submit">
        Уменьшить
      </button>
      <button className={css.thirdButton} type="submit">
        Сбросить
      </button>
    </div>
</>
    )
}



export default Body