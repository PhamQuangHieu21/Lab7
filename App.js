import { Alert, Button, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ImagePicker from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Styles/styles.js';

const App = () => {

  const [imageRef, setImageRef] = useState(null);

  useEffect(() => {
    const loadImageFromData = async() => {
      try {
        const imageData = await AsyncStorage.getItem('photo');
        if(imageData!=null){
          setImageRef(JSON.parse(imageData));
        }
      } catch (error) {
        console.log('error: ',error);
      }
    }
    loadImageFromData();
  }, []);

  useEffect(() => {
    const saveImageToData = async() => {
      try {
        await AsyncStorage.setItem('photo', JSON.stringify(imageRef));
      } catch (error) {
        console.log('error: ',error);
      }
    }
    saveImageToData();
  }, [imageRef])
  
  const handleAlert = () => {
    alert('You need to...');
  }

  const handlePickImage = async() => {
    const options = {
      quality: 1,
      mediaType: 'photo',
    }
    ImagePicker.launchCamera(options)
    .then((response)=>{
      if(response.didCancel){
        console.log('Đã hủy chụp ảnh');
      }else if(response.errorCode){
        console.log('error: ', response.errorCode);
      }else{
        console.log(response.assets[0].uri);
        setImageRef(response.assets[0].uri);
      }
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity style={styles.alert} title='Alert' onPress={handleAlert}>
          <Text style={styles.alertContent}>
            Alert
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.middle}>
        <Text style={[styles.alertContent, {margin: 16}]}>
          Hình ảnh được lấy từ Async Storage
        </Text>
        <Text style={[styles.alertContent, {marginBottom: 10}]}>
          Nhấn vào ảnh để chụp ảnh
        </Text>
        <TouchableOpacity style={styles.imageContainer} onPress={handlePickImage}>
          {
            imageRef != null 
            ? (
              <Image
              style={styles.imageContent}
              source={{uri: imageRef}}
              />
            )
            : <View style={styles.imageContent}></View>
          }
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default App