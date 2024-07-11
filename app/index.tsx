import CameraContainer from '@/features/camera/components/container';
import { HomeCameraContainer, HomeCameraContainerInner, HomePageContainer } from '@/styles/home';
import React, { useRef } from 'react';
import { ImageBackground, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import bg from '@/assets/imgs/bg.png';
import CameraTakePicture from '@/features/takePicture/components';
import { CameraView } from 'expo-camera';

const Home = () => {
  const cameraRef = useRef<CameraView>(null);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={bg}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <HomePageContainer>
          <View />

          <HomeCameraContainer>
            <HomeCameraContainerInner>
              <CameraContainer ref={cameraRef} />
            </HomeCameraContainerInner>
          </HomeCameraContainer>

          <View
            style={{
              marginBottom: 20,
              zIndex: 100,
            }}
          >
            <CameraTakePicture cameraRef={cameraRef} />
          </View>
        </HomePageContainer>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;
