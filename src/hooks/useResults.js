//Hooks are functions that add additional fuctionality to a component.
//Helpful for organising business logic.

import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]); //State to update and show results fetched from yelp.
    const [errorMessage, setErrorMessage] = useState('');    //State to update and show error messages if caught any errors.

    const searchApi = async (searchTerm) => {   //Helper function to get the results.
        console.log('Search attempted');
        try {   //try and catch method to catch errrors.
            //Since this is an asynchronous function, we add await to the get call and store its value in response.data.
            const response = await yelp.get('/search',
                {
                    params: { //Results to get based on these parameters from the yelp API documentation.
                        limit: 50,
                        term: searchTerm,
                        location: 'bangor, wales'
                    }
                }
            );
        setResults(response.data.businesses);
        } catch (err) {
            console.log(err)
            setErrorMessage('Something went wrong...');
        }
    };

    useEffect(() => {   //Used to get pre-defined search results when the component renders initially.
        searchApi('Tea');
    }, []);

    return [searchApi, results, errorMessage];  //Returning an array with the stuff needed in a component.
};