import { useOutletContext } from "react-router-dom";
import shop from './Shop.module.css';
import Card from "./Card";
import { useState } from "react";
import { filterCategory, filterList } from "./API";
import { updateCart } from './Functions';
import Categories from "./Categories";

function Shop() {
    const [input, setInput] = useState('');
    const data = useOutletContext().data;
    const [category, setCategory] = useState('');
    const sortCateg = filterCategory(category, data);
    const sorted = filterList(input, sortCateg);
    // const [alerts, setAlerts] = useState([]);

    function handleOnChange(e) {
        setInput(e.target.value)
    };

    function handleOnClick(item) {
        displayAlert(item);
        updateCart(item);
    }

    function displayAlert(item) {
        const alert = document.createElement('div', { className: shop.alert});
        alert.style.boxShadow = 'inset 5px 5px 10px 5px' + item.rarity.color + ',' + 'inset -5px -5px 10px 5px' + item.rarity.color;
        alert.classList.add(shop.alert);
        alert.innerText = item.name + ' added to cart ✅';
        const parent = document.querySelector(`.${shop.alertCont}`);
        parent.appendChild(alert);
        setTimeout(() => {
            parent.removeChild(alert)
        }, 2000);
    }

    return (
        <div>
            <div className={shop.alertCont}>
            </div>
            <div className={shop.form}>
                <form>
                    <div>
                        <label htmlFor="search" className={shop.label}>Search
                            <input type="text" id="search" onChange={handleOnChange} />
                        </label>
                    </div>
                </form>
                <div className={shop.categItems}>
                    <div className={shop.category}>
                        <div>Category</div>
                        <Categories setCategory = {setCategory}/>
                    </div>
                    <div className={shop.itemsCont}>
                        <div>Items</div>
                        <div className={shop.scrollableList}>
                            {sorted.map((item) => 
                                <div key={item.id} className={shop.priceCont}>
                                    <Card item = {item}/>
                                    <div className={shop.price}>{item.price}$</div>
                                    <div className={shop.add} onClick={handleOnClick.bind(this, item)}>+</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop