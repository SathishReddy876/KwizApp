import React from 'react'
import { Image,StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Title from '../components/title'

const Home = () => {
    return (
        <View>
            <Title />
        <View style={styles.bannerContainer}>
            <Image source={{
                uri:'https://cdn.iconscout.com/icon/premium/png-64-thumb/quiz-2725865-2267376.png'
            }}
            style={styles.banner}
            resizeMode='contain'
            />
        </View>
        <TouchableOpacity>
            <Text>
                Start
            </Text>

        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    banner: {
      height: 100,
      width: 300,
    },
    bannerContainer:{
        justifyContent:'center',
        alignItems:'center'
    }
    });

export default Home
