import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, ScrollView } from 'react-native';
import { observer } from 'mobx-react';

import main from '../stores/main.store';

@observer
export default class MainContainer extends Component {

    componentWillReact() {
        console.log("I will re-render, since the todo has changed!");

    }

    render() {
        return (
            <View style={styles.container} >
                <Text style={styles.welcome}>Hello, World</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    welcome: {
        width: 100,
        height: 100,
        marginTop: 100,
        marginBottom: 20,
    }
});
