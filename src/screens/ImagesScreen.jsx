import React from 'react';
import ImageDetails from '../commons/ImageDetails';
import { View } from 'react-native';

const ImagesScreen = () => {
  return (
    <View>
      <ImageDetails
        title="Valencia"
        imageSource={require('../../assets/valencia.jpg')}
        score={7}
      />
      <ImageDetails
        title="Medellin"
        imageSource={require('../../assets/medellin.jpg')}
        score={10}
      />
      <ImageDetails
        title="Jersey"
        imageSource={require('../../assets/jersey.jpg')}
        score={6}
      />
    </View>
  );
};

export default ImagesScreen;
