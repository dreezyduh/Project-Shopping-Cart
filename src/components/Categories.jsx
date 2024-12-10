import { useEffect, useState } from "react";
import style from './Categories.module.css';
import PropTypes from "prop-types";

const categories = [
    'Pistols',
    'Rifles',
    'Heavy',
    'SMGs',
    'Knives',
    'Gloves',
]

function Categories(props) {
    const [selected, setSelected] = useState('');

    function handleClick(e) {
        console.log(selected)
        if (e.target !== selected) {
            setSelected(e.target);
            props.setCategory(e.target.textContent);
        } else if (e.target === selected) {
            setSelected('');
            props.setCategory('');
        }
    }

    useEffect(() => {
        if (selected) {
            selected.className = style.selected;
        }
        return () => {
            if (selected) {
                selected.className = style.category;
            }
        }
    }, [selected])

    return (
        <>
            <ul className={style.categoryCont}>
                {categories.map(categ => 
                    <li key={categ} className={style.category} onClick={handleClick}>{categ}</li>
                )}
            </ul>
        </>
    )
}

export default Categories;

Categories.propTypes = {
    setCategory: PropTypes.func,
}