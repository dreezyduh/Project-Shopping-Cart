import { useOutletContext } from "react-router-dom";
import shop from './Shop.module.css';
import Card from "./Card";
import { useEffect, useState } from "react";

function Shop() {
    const [input, setInput] = useState(null);
    const data = useOutletContext();

    function handleOnChange(e) {
        setInput(e.target.value)
    };

    return (
        <div className={shop.form}>
            <form>
                <div>
                    <label htmlFor="search" className={shop.label}>Search
                        <input type="text" id="search" onChange={handleOnChange} />
                    </label>
                </div>
            </form>
            <div className={shop.categItems}>
                <div>Categories</div>
                <div className={shop.itemsCont}>
                    <div>Items</div>
                    <ul className={shop.scrollableList}>
                        {data.map((item) => 
                        <div key={item.id}>
                            <Card item = {item}/>
                            <div>Pret</div>
                        </div>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Shop