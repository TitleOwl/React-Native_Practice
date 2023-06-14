import React, { useState } from "react";
import {View, StyleSheet, Text, Button} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')
    
    const searchApi = async (searchTerm) => {
        console.log('อย่าหาทำ')
        try {
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'san jose'
            }
        });
        setResults(response.data.businesses);
    }   catch (err){
        console.log(err);
        setErrorMessage('Something went wrong');
    }
};

    return(
            <View>
                <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)}/>
                <Text style={styles.text}>{errorMessage}</Text>
                <Text style={styles.text}>We have found {results.length} results</Text>
            </View>
    );
};

const styles = StyleSheet.create({
    text:{
        textAlign: 'center'
    }

});

export default SearchScreen;
