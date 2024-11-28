import { func } from "prop-types";
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



export default useAPIdata;