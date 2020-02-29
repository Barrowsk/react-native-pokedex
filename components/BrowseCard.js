import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, Button, Modal, Alert } from 'react-native';
import axios from 'axios';

import Pokemon from './Pokemon';

export default class BrowseCard extends React.Component {
    state = {
        modalVisible: false,
        isLoading: true,
        data: {}
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible})
    }

    constructor(props) {
        super(props);
        this.getPokemon();
    }

    getPokemon = () => {
        this.setState({ isLoading: true });
        var self = this;
        axios  
            .get(
                "https://pokeapi.co/api/v2/pokemon/" + this.props.data + "/"
            )
            .then(response => {
                self.setState({ data: response.data });
                self.setState({ isLoading: false });
            })
            .catch(error => {
                console.log("Error", error);
            });
    };

    render() {

        let pokemon = this.state.data;

        if (pokemon.name === undefined) {
            return(
                <View></View>
            )
        } else {

            return(
                <View style={styles.background}>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => Alert.alert('Closing Pokemon Card.')}
                    >
                        <View style={{ backgroundColor: '#edf6ff' }}>
                            <Pokemon 
                                name={pokemon.name} 
                                image={pokemon.sprites.front_default}
                                height={pokemon.height}
                                weight={pokemon.weight}
                                types={pokemon.types}
                                forms={pokemon.forms}
                                abilities={pokemon.abilities}
                            />
                            <Button title="Back" onPress={() => {this.setModalVisible(false)}} color='#023786' />
                        </View>
                    </Modal>
                        <TouchableHighlight onPress={() => {this.setModalVisible(true)}}>
                            <View style={styles.card}>
                            <Image 
                                source={{ uri: pokemon.sprites.front_default }}
                                style={styles.img}
                            />
                            <Text style={styles.name}>{pokemon.name}</Text>
                            </View>
                        </TouchableHighlight>
                </View>
            );
        }
    }
    
}

const styles=StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#edf6ff'
    },
    card: {
        width: '90%',
        height: 250,
        margin: 20,
        shadowOffset: {width: 5, height: 5},
        shadowColor: '#000',
        shadowOpacity: 0.25,
        backgroundColor: '#fff'
    },
    img: {
        width: '90%',
        height: '70%',
        marginTop: 20,
        marginLeft: 15,
        borderColor: '#023786',
        borderWidth: 1
    },
    name: {
        marginTop: 15,
        marginLeft: 15,
        fontFamily: "AvenirNext-Bold",
        fontSize: 18,
        textTransform: "capitalize",
        color: '#023786'
    },
});