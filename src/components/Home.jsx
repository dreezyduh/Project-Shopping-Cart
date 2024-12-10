import { useOutletContext } from "react-router-dom";
import style from './Home.module.css'
import Card from "./Card";

function Home() {
    const data = useOutletContext().data

    const items = []
    for (let i = 0; i < 9; i++) {
        const random = Math.floor(Math.random() * 1828)
        items.push(data[random])
    }

    

    return (
        <div className={style.blur}>
            <div>
                <p>Some of our items</p>
                <hr />
                <div>
                    <div className={style.acquisitions}>
                        {items.map((item) =>
                            <Card key = {item.id} item = {item}/>
                        )}
                    </div>
                </div>
            </div>
            <h1>We are proud to announce our new skins website, ChooSkins. Get on the skin train with these fresh paints. For every 200$ spent you get a 0% bonus points on our servers ! Use promotional code for a 0% discount RIGHT NOW. 0% bonus deposit every &quot;Choosday&quot; (Tuesday)</h1>
        </div>
    )
}



export default Home