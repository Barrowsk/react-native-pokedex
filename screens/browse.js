import React from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

import MainHeader from '../components/MainHeader';
import BrowseCard from '../components/BrowseCard';

export default class BrowseScreen extends React.Component {

    state = {
        isLoading: true,
        dataSource: [],
    };

    componentDidMount() {
        this.setState({ isLoading: true });
        var self = this;
        axios  
            .get(
                'https://pokeapi.co/api/v2/pokemon/'
            )
            .then(response => {
                self.setState({ dataSource: response.data.results });
                self.setState({ isLoading: false });
            })
            .catch(error => {
                console.log("Error fetching data.", error);
            });
    };

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.background}>
                    <MainHeader />
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <ActivityIndicator size="large" animating />
                    </View>
                </View>
            );
        } else {
            return (
                <View style={styles.background}>
                    <MainHeader />
                    <View style={styles.container}>
                        <FlatList 
                            data={this.state.dataSource}
                            renderItem={({item}) => (<BrowseCard data={item.name} />)}
                            keyExtractor={(item) => item.name}
                        />
                    </View>
                </View>
            );
        }
    };

}
    

const styles=StyleSheet.create({
    background: {
        backgroundColor: '#eDf6ff',
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        width: '100%',
        backgroundColor: '#edf6ff',
        height: '100%'
    },
    item: {
        borderBottomColor: '#023786',
        margin: 20,
    },
    name: {
        fontSize: 20,
        fontFamily: "AvenirNext-Heavy",
        paddingLeft: 20,
        color: '#023786',
        textTransform: "capitalize"
    }
});

