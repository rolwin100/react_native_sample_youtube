/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';
import dateText from '../../utils/dateText';
import styles from './style'


const VideoCard = (props)=>{
    const { thumbnail, title, description, channelTitle, published, videoId } = props;
    const navigation = useNavigation();
    
    return (
    <TouchableOpacity onPress={() => navigation.navigate('VideoPlay',{ videoId: videoId })}>
        <View style={styles.container} >
            <View>
                <Image style={ styles.bannerImg } source={{ uri: thumbnail }}/>
            </View>
            <View style={styles.textWrapper}>
                <Text style={styles.title}>
                    { title }
                </Text>
                <Text style={styles.description}>
                    { description }
                </Text>
                <Text style={styles.viewCount}>
                    <AntDesign style={ styles.icon} name="iconfontdesktop" size={16} color="black" /> { channelTitle } | <Text style={ {color:'white'}} >|</Text>
                    <AntDesign style={ styles.iconClock} name="clockcircleo" size={16} color="black" /> { dateText(published) }
                </Text>
            </View>
        </View>
    </TouchableOpacity>
    )
}

export default VideoCard