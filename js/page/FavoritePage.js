
import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';



type Props = {};
export default class FavoritePage extends Component<Props> {
    render() {
        const {navigation} = this.props
        return (
            <View style={styles.container}>
               <Text style={styles.welcome}>FavoritePage</Text>
                <Button
                    style = {{backgroundColor:'red'}}
                    title="改变主题颜色"
                    onPress={() => {
                        navigation.setParams({
                            theme:{
                                tintColor: 'green',
                                updateTime: new Date().getTime()
                            }
                        })
                    }}></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

});
