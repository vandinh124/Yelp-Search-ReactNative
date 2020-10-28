import { useEffect, useState } from 'react';
import yelp from '../apis/yelp';

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50, // --> /search?limit=50
                    term: searchTerm, // term: term (ES6)
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        } catch (err){
            setErrorMessage('Something went wrong')
        }
        
    }

    //Call searchApi when component is first render
    //Bad Code
    // searchApi('steak') --> run 50 times

    useEffect(() => {
        searchApi('steak')
    }, []) // run 1 time

    return [searchApi, results, errorMessage]

}