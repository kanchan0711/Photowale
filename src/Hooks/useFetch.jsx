import {useState, useEffect} from React;

function useFetch(url){
    const [data, setData] = useEffect(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async() => {
            try{
                const res = await fetch(url);
                const json = await res.json();
                setData(json)
            }
            catch(error) {
                console.log("error", error)
            }finally{
                setLoading(false);
            }
        }
        fetchData()
    }, [url]);

    return{data, loading};
}

export default useFetch