import React from 'react';
import { Text, View, Image, FlatList, StyleSheet, SafeAreaView } from 'react-native';

export default class Pokemon extends React.Component {

    render() {
        // console.log(this.props.types);
        // console.log(this.props.abilities);
        // console.log(this.props.forms);
        console.log(this.props.image);

        return(
            <View style={styles.background}>
                <View style={styles.card}>
                    <View style={styles.viewStyle}>
                        <Image 
                            source={{ uri: this.props.image }}
                            style={styles.img}
                        />
                    </View>
                    <Text style={styles.header}>
                        {this.props.name}
                    </Text>
                    <View style={styles.info}>
                        <Text style={styles.text}>Weight: {this.props.weight} mg</Text>
                        <Text style={styles.text}>Height: {this.props.height / 10} m</Text>
                        <Text style={styles.text}>Types:</Text>
                        <FlatList 
                            data={this.props.types}
                            renderItem={({ item }) => (
                                <Text style={styles.listText}>{item.type.name}</Text>
                            )}
                            keyExtractor={(item) => item.type.name}
                        /> 
                        <Text style={styles.text}>Abilities:</Text>
                        <FlatList 
                            data={this.props.abilities}
                            renderItem={({ item }) => (
                                <Text style={styles.listText}>{item.ability.name}</Text>
                            )}
                            keyExtractor={(item) => item.ability.name}
                        />
                        <Text style={styles.text}>Forms:</Text>
                        <FlatList 
                            data={this.props.forms}
                            renderItem={({ item }) => (
                                <Text style={styles.listText}>{item.name}</Text>
                            )}
                            keyExtractor={(item) => item.name}
                        />
                    </View>
                </View> 
            </View>
        );
    }
}

const styles=StyleSheet.create({
    background: {
        width: '100%',
        height: '94%',
        backgroundColor: '#edf6ff',
    },
    header: {
        fontSize: 30,
        textAlign: "left",
        marginTop: 15,
        marginLeft: 15,
        fontFamily: "AvenirNext-Bold",
        textTransform: "capitalize",
        color: '#023786'
    },
    viewStyle: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    img: {
        width: '90%',
        height: '70%',
        marginTop: 20,
        marginLeft: 15,
        borderColor: '#023786',
        borderWidth: 2,
        borderRadius: 3
    },
    info: {
        flex: 1,
        backgroundColor: "white",
        opacity: 0.8,
    },
    text: {
        fontFamily: "AvenirNext-HeavyItalic",
        fontSize: 20,
        textTransform: "capitalize",
        color: "#3D5D8C"
    },
    listText: {
        fontFamily: "AvenirNext-Bold",
        fontSize: 16,
        textTransform: "capitalize",
        color: "#6D798A",
        marginLeft: 20
    },
    card: {
        width: '90%',
        margin: 25,
        shadowOffset: {width: 5, height: 5},
        shadowColor: '#000',
        shadowOpacity: 0.25,
        backgroundColor: '#fff',
        flex: 1,
        padding: 20
    }
});