/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import WebView from 'react-native-webview'
import { connect } from 'react-redux';

const styles = StyleSheet.create({
    webViewContainer:{
      width:'100%',
      maxWidth: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
      minHeight: Platform.OS === 'web'?  '50%':'35%'
    },
    videoDescription:{
      margin:15
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
});

const VideoPlay = ({ route, videos })=> {
  
  const { videoId } = route.params;
  const video = videos.filter((val)=> val.id.videoId === videoId)
  const { description , title } = video[0].snippet;

    return (
      <>
      <View style={styles.webViewContainer}>
      { 
        Platform.OS === 'web'?
          <iframe width='100%' height="100%"
            src={`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1&showinfo=0&controls=0`}>
          </iframe> :
          <WebView
            style={{flex:1}}
            javaScriptEnabled={true}
            source={{uri: `https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1&showinfo=0&controls=0`}}
            />
      }
      </View>
      <View style={styles.videoDescription}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      </>
    );
  }

function mapStateToProps(state) {
  return {
    videos: state.videosReducer.data.items,
  };
}
  
export default connect( mapStateToProps )(VideoPlay);