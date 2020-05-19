
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex:1,
        margin: 15,
        backgroundColor: '#fff',
        flexGrow: 0,
    },
    bannerImg:{
        height: 210
    },
    title:{
        fontWeight:"bold",
        fontSize:17,
        paddingBottom:10
    },
    description:{
        color:'grey',
        lineHeight:20,
        letterSpacing: 0.5,
        paddingBottom:15
    },
    textWrapper:{
        backgroundColor: 'white', 
        width: '100%', 
        padding:15
    },
    viewCount:{
        fontWeight:'bold',
        color:'#464444'
    },
    icon:{
        paddingRight:5
    },
    iconClock:{
        paddingLeft:8,
        paddingRight:5,
    }
  });

  export default styles