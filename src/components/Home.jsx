import { Link, useOutletContext } from "react-router-dom";
import style from '../App.module.css'
import Card from "./Card";

function Home() {
    const data = useOutletContext()
    const items = [data[0].image, data[1].image, data[2].image, data[3].image, data[4].image, data[5].image, data[6].image, data[7].image, data[8].image]
    console.log(data)

    return (
        <div className={style.blur}>
            <div>
                <p>Recent acquisitions</p>
                    <ul className={style.acquisitions}>
                        {items.map((item) =>
                            <Card key = {item} item = {item}/>
                        )}
                    </ul>
            </div>
            <h1>We are proud to announce our new skins website, ChooSkins. Get on the skin train with these fresh paints. For every 200$ spent you get a 0% bonus points on our servers ! Use promotional code for a 0% discount RIGHT NOW. 0% bonus deposit every "Choosday" (Tuesday)</h1>
        </div>
    )
}



export default Home