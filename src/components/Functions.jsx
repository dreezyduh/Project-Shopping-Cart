import { getTotalP, setTotalP } from "./Cart";

const cart = [];

function updateCart(item) {
    if (!cart.includes(item)) {
        item.amount = 1
        cart.push(item);
    } else if (cart.includes(item)) {
        const index = cart.indexOf(item)
        cart[index].amount += 1;
    }
    setTotalP(getTotalP() + item.price)
}

const rarityPrice = {
    "rarity_common_weapon": 5,
    "rarity_uncommon_weapon": 17,
    "rarity_rare_weapon": 53,
    "rarity_mythical_weapon": 175,
    "rarity_legendary_weapon": 499,
    "rarity_ancient_weapon": 1337,
    "rarity_ancient": 1337,
    "rarity_contraband_weapon": 42069,
}


function setPrices(data) {
    const keys = Object.keys(rarityPrice);
    const values = Object.values(rarityPrice);
    data.map(item => {
        item.price = values[keys.indexOf(item.rarity.id)]
    })
}

export {updateCart, cart, setPrices}