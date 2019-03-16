
import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import actions from "../action";
import {connect} from "react-redux";



type Props = {};
class MyPage extends Component<Props> {
    render() {

        return (
            <View style={styles.container}>
               <Text style={styles.welcome}>MyPage</Text>
                <Button
                    style = {{backgroundColor:'red'}}
                    title="改变主题颜色"
                    onPress={() => {
                        this.props.onThemeChange('purple')
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
const mapStateToProps = state => ({
    theme: state.theme.theme,
});
const mapDispatchToprops = dispatch => ({
    onThemeChange: theme => dispatch(actions.onThemeChange(theme))
})
export default connect(mapStateToProps,mapDispatchToprops)(MyPage)

