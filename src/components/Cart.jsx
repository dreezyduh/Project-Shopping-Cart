import { useState } from "react"

import style from './Cart.module.css';
import Item from "./Item";
import {cart} from './Functions'

let totalP = 0;

function setTotalP(newTotal) {
    totalP = newTotal;
}

function getTotalP() {
    return totalP;
}

function Cart() {
    const [localCart, setCart] = useState([...cart])
    const [total, setTotal] = useState(totalP);

    function removeFromCart(item) {
        cart.splice(cart.indexOf(item), 1);
        setCart([...cart]);
        totalP -= (item.price * item.amount);
        setTotal(totalP);
    }

    function increaseAmount(item) {
        item.amount += 1
        setCart([...cart]);
        totalP += item.price;
        setTotal(totalP);
    }

    function decreaseAmount(item) {
        if (item.amount > 1) {
            item.amount -= 1;
            setCart([...cart]);
            totalP -= item.price;
            setTotal(totalP);
        } else {
            removeFromCart(item)
        }
    }


    return (
        
        <div className={style.cart}>
                {localCart && localCart.length > 0 
                ?  
                <>
                    <div className={style.tableCont}>
                        <table className={style.tableHeaders}>
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {localCart.map(item =>
                                    <Item key = {item.id} item = {item} remove = {removeFromCart.bind(this, item)} increaseAmount = {increaseAmount.bind(this, item)} decreaseAmount = {decreaseAmount.bind(this, item)}/>
                                    )}
                            </tbody>
                        </table>
                    </div>
                    <div className={style.total}>
                        <div>Subtotal: {total}$</div>
                        <div>Tax: Free</div>
                        <div>Total: {total}$</div>
                        <button className={style.checkout}>Check out</button>
                    </div>
                </>
                :  <h1 className={style.emptyCart}>Cart is empty</h1>}
        </div>
        
    )
}


export default Cart

export {setTotalP, getTotalP}
