import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';
 
import { connect } from 'react-redux';
import { actionGetWeather } from '../action/GetWeatherAction';
// import { format } from 'path';
 
class Redux1 extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        header:null,
    })
 
    constructor(props) {
        super(props);
        //设置状态
        this.setState = ({
            
        })
    }
 
    quit = () => {
        this.props.navigation.goBack();
    }
 
    stateRedux = () => {
        let s = '123456';
        this.props.dispatch(actionGetWeather(s));
    }
 
    render() {
        return (
            <View style = {styles.bgView}>
                 <TouchableHighlight style = {styles.touchableView} underlayColor={"#f4f4f4"} onPress={() => this.stateRedux()}>
                    <View style = {styles.buttonView}>
                        <Text style = {{ fontSize : 16,color : "#FFFFFF" }}>
                            { '发送' }
                        </Text>
                    </View>
                </TouchableHighlight>
 
                <Text style = {{color:"#000000",fontSize : 14}}>
                    {
                        this.props.GetWeatherReducer == null ? 
                        "" 
                        : 
                        this.props.GetWeatherReducer.status
                    }
                </Text>
 
                <TouchableHighlight style = {styles.touchableView} underlayColor={"#f4f4f4"} onPress={() => this.quit()}>
                    <View style = {styles.buttonView}>
                        <Text style = {{ fontSize : 16,color : "#FFFFFF" }}>
                            { 'quit' }
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    bgView : {
        flex : 1,
        justifyContent : 'center', 
        alignItems : 'center',
        backgroundColor : '#FFFFFF',
    },
    touchableView : {
        margin : 6,
    },
    buttonView : {
        width : 100,
        height : 40,
        backgroundColor : "#0000FF",
        borderRadius : 5,
        flexDirection : 'row', 
        justifyContent : 'center', 
        alignItems : 'center',
    },
});
 
function select(store) {
    return {
        GetWeatherReducer : store.GetWeatherReducer,
    }
}
 
export default connect(select)(Redux1);

