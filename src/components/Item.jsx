
import Card from "./Card";
import style from './Item.module.css';
import PropTypes from "prop-types";

function Item(props) {
    return (
        <tr>
            <td>
                <div className={style.cartItem}>
                    <Card item = {props.item}/>
                    <div>{props.item.name}</div>
                </div>
            </td>
            <td>
                <div style={{textAlign: "center"}}>{props.item.price}$</div>
            </td>
            <td className={style.quanTd}>
                <div className={style.amountBar}>
                    <div onClick={props.decreaseAmount} className={style.border}>-</div>
                    <div className={style.border}>{props.item.amount}</div>
                    <div onClick={props.increaseAmount} className={style.border}>+</div>
                </div>
            </td>

            <td>
                <div className={style.totalContainer}>
                    <div>{props.item.price * props.item.amount}$</div>
                    <div className={style.remove} onClick={props.remove}>X</div>
                </div>
            </td>
        </tr>
    )
}

Item.propTypes = {
    item: PropTypes.object,
    remove: PropTypes.func,
    decreaseAmount: PropTypes.func,
    increaseAmount: PropTypes.func,
}

export default Item;

