import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
} from 'react-native';
 
import { connect } from 'react-redux';
 
class Main extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        
    })
 
    constructor(props) {
        super(props);
        //设置状态
        this.state = {
            image : 1,
            text : '',
        }
    }
 
    goReduxPage = () => {
        this.props.navigation.navigate("Redux1");
    }
 
    goPropsPage = () => {
 
    }
 
    componentDidMount(){
        this.setState({
            text : '',
        })
    }
 
    quit = () => {
        this.setState({
            text:'',
            image : 1,
        })
    }
 
    /**
     * 生命周期 - props发生变动时的操作，建议将回调代码在这里处理
     * @param {*} nextProps 
     */
    componentWillReceiveProps(nextProps){
        if(nextProps.GetWeatherReducer != null){
            if(nextProps.GetWeatherReducer.status == 'success'){
                this.setState({
                    image : 2,
                })
            }else{
                this.setState({
                    image : 1,
                })
            }
            this.setState({
                text : nextProps.GetWeatherReducer.status,
            })
        }
    }
 
    /**
     * 生命周期 - 因为state变动频繁，不建议将redux的回调代码在这里处理，而且这里面是不能进行setState的操作的。
     * @param {*} nextProps 
     * @param {*} nextState 
     */
    shouldComponentUpdate(nextProps,nextState){
        console.log("执行了shouldComponentUpdate");
    }
 
    render() {
 
        return (
            <View style = {styles.bgView}>
                <Text>
                    {
                        "本Demo主要功能:\n"+
                        "1.redux在本页面或者跨页面修改全局组件内容\n"+
                        "2.通过props，state父子组件交互"
                    }
                </Text>
                
                <TouchableHighlight style = {styles.touchableView} underlayColor={"#f4f4f4"} onPress={() => this.goReduxPage()}>
                    <View style = {styles.buttonView}>
                        <Text style = {{ fontSize : 16,color : "#FFFFFF" }}>
                            { 'redux' }
                        </Text>
                    </View>
                </TouchableHighlight>
 
                <TouchableHighlight style = {styles.touchableView} underlayColor={"#f4f4f4"} onPress={() => this.goPropsPage()}>
                    <View style = {styles.buttonView}>
                        <Text style = {{ fontSize : 16,color : "#FFFFFF" }}>
                            { 'props' }
                        </Text>
                    </View>
                </TouchableHighlight> 
 
                {/* 动态区域 */}
                <View style = {{ width : '100%',height : 100, backgroundColor : "EAEEEF" ,justifyContent : 'center', alignItems : 'center',}}>
                    {
                        this.state.image == 1 ? 
                        <Image source = { require("../../images/heimao.jpg")}
                            style = {{ width : 40,height : 40,borderRadius:20 }}/>
                        :
                        <Image source = {require("../../images/shuiguo.jpg")}
                            style = {{ width : 40,height : 40,borderRadius:20 }}/>
                    }
                    <Text style = {{color:"FF0000",fontSize : 14}}>
                        { this.state.text }
                    </Text>
                </View>
 
                <TouchableHighlight style = {styles.touchableView} underlayColor={"#f4f4f4"} onPress={() => this.quit()}>
                    <View style = {styles.buttonView}>
                        <Text style = {{ fontSize : 16,color : "#FFFFFF" }}>
                            { 'clear' }
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
 
export default connect(select)(Main);
