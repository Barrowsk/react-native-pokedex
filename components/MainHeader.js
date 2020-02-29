import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Font from 'expo-font';

export default class MainHeader extends React.Component {
    componentDidMount(){
        Font.loadAsync({
          'Pokemon-Solid': require('../assets/fonts/Pokemon-Solid.ttf')
        })
      }
    
    render() {
        return(
            <View style={styles.header}>
                <Text style={styles.text}>MY POKÉDEX</Text>
            </View>
        );
    }
};

const styles=StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 35,
        backgroundColor: '#edf6ff'
    },
    text: {
        fontSize: 35,
        fontFamily: "AvenirNext-Heavy",
        paddingLeft: 20,
        color: '#023786',
        textShadowColor: '#f5de14',
        textShadowOffset: { width: 2, height: 2},
        textShadowRadius: 0
    }
});