import style from './Card.module.css';

function Card(props) {
    return (
        <li className={style.card}>
            <img src={props.item}/>
        </li>
    )
}
export default Card