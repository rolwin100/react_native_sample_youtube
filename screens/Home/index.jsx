/* eslint-disable react/prop-types */
import React,{ useEffect } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import VideoCard from '../../components/VideoCard'
import { getVideos } from './action';

const HomeScreen = (props) => {
  const { getVideos, videos } = props;
  useEffect(() => {
    getVideos();
  }, []);
    return (
        <SafeAreaView style={{flex:1}}>
          {videos && <FlatList
            data={videos}
            renderItem={(val) => 
              <VideoCard 
                videoId={val.item.id.videoId}
                thumbnail={val.item.snippet.thumbnails.high.url}
                title={val.item.snippet.title}
                description={val.item.snippet.description}
                channelTitle={val.item.snippet.channelTitle}
                published={val.item.snippet.publishedAt}
              />
          }
            keyExtractor={item => item.id.videoId }
          /> }
        </SafeAreaView>
    );
}

  function mapStateToProps(state) {
    return {
      videos: state.videosReducer.data.items,
    };
  }
  
export default connect(mapStateToProps, { getVideos })(HomeScreen);