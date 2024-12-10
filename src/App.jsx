import { useRef, useState } from 'react'
import useAPIdata from './components/API';
import { Link, Outlet } from 'react-router-dom';
import styles from './App.module.css'
import './App.css';
import cartImg from './assets/cart-outline.svg';
import logo from './assets/logo.png'
import { setPrices } from './components/Functions';

function App() {
  const init = useRef(false);
  const {data, error, loading} = useAPIdata();
  const [cart, setCart] = useState([]);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Network error encountered {error}</p>
  
  setPrices(data);
  console.log(data);
  

  {init.current === true && data} return (
    <div className={styles.oxanium}>
      <nav className={styles.navBar}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.navs}>
          <Link to={'/'}>Home </Link>
          <Link to={'shop'}>Shop </Link>
        </div>
        <div className={styles.cart}>
          <Link to={'cart'}>
            <img className={styles.cartImg} src={cartImg} alt="Cart button" />
          </Link>
        </div>
      </nav>
      <div className={styles.main}>
        <Outlet context = {{data: data, cart: [cart, setCart], }}/>
      </div>
    </div>
  )
}

export default App

