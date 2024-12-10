import { useEffect, useState } from "react"

const url = 'https://bymykel.github.io/CSGO-API/api/en/skins.json'

const useAPIdata = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error: Status ${response.status}`)
                }
                const responseData = await response.json();
                setData(responseData);
                setError(null);
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        } 
        fetchData()
    }, [])
    
    return {data, error, loading};
}

function filterList(query, list) {
    query = query.toLowerCase().split(' ');
    const regex = new RegExp(query.join(`?\\W+`), 'i');
    return list.filter(item => 
        item.name.toLowerCase().match(regex)
        
    );
}

function filterCategory(categ, data) {
    return categ === '' ? data : data.filter(item => item.category.name === categ);
}



export default useAPIdata;
export {filterList, filterCategory};