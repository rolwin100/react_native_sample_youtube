/* eslint-disable react/prop-types */
import React,{ useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import VideoCard from '../../components/VideoCard'
import { FlatGrid } from 'react-native-super-grid';
import { getVideos } from './action';

const HomeScreen = (props) => {
  const { getVideos, videos } = props;
  useEffect(() => {
    getVideos();
  }, []);
    return (
        <SafeAreaView style={{flex:1}}>
          <FlatGrid
            itemDimension={400}
            items={videos}
            style={{ marginTop:0, flex: 1}}
            spacing={0}
            renderItem={( val) => (
              <VideoCard 
                    videoId={val.item.id.videoId}
                    thumbnail={val.item.snippet.thumbnails.high.url}
                    title={val.item.snippet.title}
                    description={val.item.snippet.description}
                    channelTitle={val.item.snippet.channelTitle}
                    published={val.item.snippet.publishedAt}
                  />
            )}
          />
        </SafeAreaView>
    );
}

  function mapStateToProps(state) {
    return {
      videos: state.videosReducer.data.items,
    };
  }
  
export default connect(mapStateToProps, { getVideos })(HomeScreen);