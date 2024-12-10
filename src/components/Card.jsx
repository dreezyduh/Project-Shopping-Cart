import PropTypes from 'prop-types';
import style from './Card.module.css';

function Card(props) {
    
    return (
        <div className={style.card} style={{backgroundColor: props.item.rarity.color}}>
            <img src={props.item.image} loading='lazy'/>
            <div className={style.name}>{props.item.pattern ? props.item.pattern.name : 'Vanilla'}</div>
        </div>
    )
}


export default Card

Card.propTypes = {
    item: PropTypes.object,
    
}