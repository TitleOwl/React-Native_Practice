import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.SearchStyles}>
            <Feather name="search" size={24} color="gray" style={styles.icon} />

                <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                placeholder="Search"
                style={styles.input}
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
                />
        </View>
    );
}

const styles = StyleSheet.create({
    SearchStyles: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: 'lightgray',
        height: 50,
        borderRadius: 8,
        marginHorizontal: 30,
    },

    icon: {
        marginRight: 20,
    },

    input: {
        flex: 1,
        fontSize: 16,
    },
});

export default SearchBar;
