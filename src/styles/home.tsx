import styled from 'styled-components/native';

export const HomePageContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const HomeCameraContainer = styled.View`
  overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
`;

export const HomeCameraContainerInner = styled.View`
  width: 80%;
  height: 23%;
`;
