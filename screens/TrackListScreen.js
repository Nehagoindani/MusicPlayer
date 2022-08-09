import React, { useEffect, useRef, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Pressable,
    Image,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
    Animated
} from 'react-native';
import Slider from '@react-native-community/slider';
import musiclibrary from '../data';


import Icon from 'react-native-vector-icons/Ionicons'

const { width, height } = Dimensions.get('window')


export default function TrackListScreen() {
    const scrollX = useRef(new Animated.Value(0)).current;
    const [songIndex, setSongIndex] = useState(0)

    const rederSongs = ({ item, index }) => {
        return (
            <Animated.View style={{width:width, justifyContent:'center', alignItems:'center'}}>
                <View style={styles.imageWrapper}>
                    <Image
                        source={item.artwork}
                        style={styles.musicImage}

                    />
                </View>
            </Animated.View>

        )
    }

    useEffect(() => {
        console.log(musiclibrary)
       
        scrollX.addListener(({Value})=>{
            const index = Math.round(Value / width)
            setSongIndex(index)
            console.log(musiclibrary[songIndex].title)

        })
    }, [])


    return (

        <View style={styles.container}>
            <View style={styles.miniConatiner}>

                <Animated.FlatList
                    renderItem={rederSongs}
                    data={musiclibrary}
                    keyExtractor={item => item.id}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={25}
                    // it will trigger the scroll event
                    onScroll={Animated.event([
                        {
                            nativeEvent:{
                                contentOffset: {x: scrollX}
                            }
                        }
                    ],
                    {useNativeDriver: true}
                    )}

                />

                <View>
                    <Text style={styles.songTitle}> {musiclibrary[songIndex].title}</Text>
                    <Text style={styles.songArtist}> </Text>
                </View>


                <View>
                    <Slider
                        style={{ width: 300, height: 45, marginTop: 25, flexDirection: 'row' }}
                        minimumValue={0}
                        maximumValue={1}
                        minimumTrackTintColor="#ffd369"
                        maximumTrackTintColor="#ffff"
                        onSlidingComplete={() => { }}
                    />


                    <View style={styles.duration}>
                        <Text style={styles.durationText}>0.00</Text>
                        <Text style={styles.durationText}>0.00</Text>

                    </View>

                </View>



                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '60%', marginTop: 15 }}>
                    <TouchableOpacity>
                        <Icon name='play-skip-back-outline' size={35} color='#ffd369' />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name='play-circle-sharp' size={70} color='#ffd369' />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name='play-skip-forward-outline' size={35} color='#ffd369' />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.bottomContainer}>
                <View style={styles.bottomIcon}>
                    <TouchableOpacity>
                        <Icon name='heart-outline' size={30} color='#888888' />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name='repeat' size={30} color='#888888' />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name='share-outline' size={30} color='#888888' />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name='ellipsis-horizontal' size={30} color='#888888' />
                    </TouchableOpacity>

                </View>
            </View>

            <Text> Music player</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222831',
    },
    miniConatiner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#fff'
    },
    bottomContainer: {
        width: width,
        alignItems: 'center',
        paddingVertical: 15,
        borderTopColor: '#393E46'
    },
    imageWrapper: {
        width: 300,
        height: 340,
        marginBottom: 15,

    },
    musicImage: {
        width: '100%',
        height: '100%',
        borderRadius: 15,

    },
    musicTitle: {
        fontSize: 22,
        color: '#fff',
        fontWeight: '500',
        marginTop: 12,
        marginHorizontal: 20,
        marginBottom: 1,
    },
    bottomIcon: {
        flexDirection: 'row',
        justifyContent: "space-between",
        width: '80%'
    },
    songTitle: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '600',
        color: '#EEEEEE'
    },
    songArtist: {
        fontSize: 16,
        textAlign: "center",
        fontWeight: '300',
        color: '#EEEEEE'
    },

    duration: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 340,

    },
    durationText: {
        color: '#fff',
        fontWeight: '500',
    },
    widgetArtisteTitle: {
        fontSize: 14,
        color: '#fff',
        opacity: 0.8,
        marginHorizontal: 10,
        marginBottom: 12,
        marginTop: 1,
    },
    widgetImageStyle: {
        width: 55,
        height: 60,
        marginTop: 3,
    },
    linearGradient: {
        width: '100%',
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
    },
    shuffleButton: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    shuffleButtonContainer: {
        paddingVertical: 15,
        paddingHorizontal: 35,
        borderRadius: 40,
        alignSelf: 'center',
        backgroundColor: '#1DB954',
    },
    tinyLogo: {
        width: '100%',
        height: '100%',
    },
})