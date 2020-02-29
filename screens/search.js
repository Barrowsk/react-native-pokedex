import React from 'react';
import { View, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import { Item, Icon } from 'native-base';
import axios from 'axios';

import MainHeader from '../components/MainHeader';
import SearchCard from '../components/SearchCard';

export default class SearchScreen extends React.Component {
    state = {
        searchInput: "",
        isLoading: true,
        data: {}
    };

    searchPokemon = () => {
        this.setState({ isLoading: true });
        var self = this;
        axios  
            .get(
                "https://pokeapi.co/api/v2/pokemon/" + this.state.searchInput.toLowerCase() + "/"
            )
            .then(response => {
                self.setState({ data: response.data });
                self.setState({ isLoading: false });
            })
            .catch(error => {
                console.log(error);
            });
    };

    renderBody = () => {
        if (this.state.isLoading) {
            return (
                <View style={styles.background}>
                    {/* <MainHeader />
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <ActivityIndicator size="large" animating />
                    </View> */}
                </View>
            );
        } else {
            return <SearchCard data={this.state.data} />;
        }
    };

    render() {
        return (
            <View style={styles.background}>
                <MainHeader />
                <View style={styles.container}>
                    <Icon type="Ionicons" name="search" color="#023786" onPress={this.searchPokemon} />
                    <TextInput 
                        style={styles.search}
                        onChangeText={searchInput => this.setState({ searchInput })}
                        placeholder="Search Pokemon"
                    />
                </View>          
                {this.renderBody()}
            </View>
        );
    }
}

const styles=StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#edf6ff',
        flexDirection: 'column'
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        width: '100%',
        backgroundColor: '#edf6ff',
        height: 60
    },
    search: {
        height: 40,
        width: '60%',
        borderColor: 'gray',
        borderWidth: 1,
        flex: 0.8,
        borderRadius: 5,
        backgroundColor: 'white',
        paddingLeft: 5,
    }
});

