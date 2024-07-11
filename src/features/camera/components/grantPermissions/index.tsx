import { useCameraPermissions } from 'expo-camera';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const GrantCameraPermissions = () => {
  const [requestPermission] = useCameraPermissions();

  return (
    <TouchableOpacity>
      <Text>Grant Camera Permissions</Text>
    </TouchableOpacity>
  );
};

export default GrantCameraPermissions;
