import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

class Button extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={styles.buttonStyle}>
                <Text style={styles.textStyle}>{this.props.children}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderColor: '#007aff',
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5
    }
};

export { Button };
