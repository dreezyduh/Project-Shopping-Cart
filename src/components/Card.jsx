import style from './Card.module.css';

function Card(props) {
    
    return (
        <li className={style.card} style={{backgroundColor: props.item.rarity.color}}>
            <img src={props.item.image} />
            <div className={style.name}>{props.item.short}</div>
        </li>
    )
}


export default Card