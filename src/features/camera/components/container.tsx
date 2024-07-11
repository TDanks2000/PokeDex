import Camera from '@/features/camera/components/camera';
import GrantCameraPermissions from '@/features/camera/components/grantPermissions';
import LoadingCameraPermissions from '@/features/camera/components/loading';
import { CameraView, useCameraPermissions } from 'expo-camera';
import React, { forwardRef } from 'react';

const CameraContainer = forwardRef<any, CameraView>(({}, ref) => {
  const [permission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <LoadingCameraPermissions />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return <GrantCameraPermissions />;
  }

  return <Camera ref={ref} />;
});

export default CameraContainer;
