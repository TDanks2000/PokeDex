import CameraBG from '@/features/camera/components/camera/bg';
import { CameraView } from 'expo-camera';
import { forwardRef, useState } from 'react';
import { CmaraContainer, CmaraInsideContainer } from './styles';

const Camera = forwardRef<any, CameraView>(({}, ref) => {
  const [facing, setFacing] = useState<'front' | 'back'>('back');

  return (
    <CmaraContainer style={{ flex: 1, position: 'relative' }}>
      <CameraBG />
      <CmaraInsideContainer>
        <CameraView
          style={{ flex: 1 }}
          facing={facing}
          ref={ref}
          animateShutter={false}
        />
      </CmaraInsideContainer>
    </CmaraContainer>
  );
});

export default Camera;
