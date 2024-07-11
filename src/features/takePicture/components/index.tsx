import { CameraView } from 'expo-camera';
import { FC, RefObject } from 'react';
import { TouchableOpacity } from 'react-native';
import { TakePictureCircle, TakePictureCircleInner } from './styles';

interface CameraTakePictureProps {
  cameraRef: RefObject<CameraView>;
}

const CameraTakePicture: FC<CameraTakePictureProps> = ({ cameraRef }) => {
  const talePicture = async () => {
    if (!cameraRef.current) return;

    const picture = await cameraRef.current.takePictureAsync();
    console.log(picture);
  };

  return (
    <TouchableOpacity
      disabled={!cameraRef.current}
      onPress={talePicture}
    >
      <TakePictureCircle>
        <TakePictureCircleInner />
      </TakePictureCircle>
    </TouchableOpacity>
  );
};

export default CameraTakePicture;
