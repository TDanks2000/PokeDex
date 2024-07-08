import { CameraView, useCameraPermissions } from 'expo-camera';
import React, { useState } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';

const Home = () => {
  const [facing, setFacing] = useState<'front' | 'back'>('back');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button
          onPress={requestPermission}
          title="grant permission"
        />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={{ flex: 1 }}>
      <CameraView
        style={{ flex: 1 }}
        facing={facing}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: 'transparent',
            margin: 64,
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={toggleCameraFacing}
          >
            <Text>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
};

export default Home;
