import {useState,useEffect} from 'react'

const useFetch = (URL) => {
    const [data, setData] = useState({
        result:null,
        loading:true,
        error: null
    })


    useEffect(() => {
        const abortFetch = new AbortController()
        fetch(URL, {signal: abortFetch.signal})
        .then((response) => response.json())
        .then((data) => setData({results: data, loading: false, error: null}))
        .catch((error) => {
            abortFetch.signal.aborted
            ? console.log('fetch aborted')
            : setData({results: null, loading: false, error})
        })
        return () => abortFetch.abort()
    },[URL])


  return data
}



export default useFetch