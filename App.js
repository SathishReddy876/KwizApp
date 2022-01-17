/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {StyleSheet,Text,View,} from 'react-native';
import Home from './screens/home';
import Quiz from './screens/quiz';
import Result from './screens/result';
 
  const App= () => {
    
   return (
     <View style={styles.container}>
       <Home />
     </View>    
     
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     padding: 40,
     paddingHorizontal: 16,
   },
   });
 
 export default App;
 