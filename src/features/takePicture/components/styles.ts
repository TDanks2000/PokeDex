import styled from 'styled-components/native';

export const TakePictureCircle = styled.View`
  width: 60px;
  height: 60px;
  padding: 2px;
  border-radius: 99999px;
  background-color: white;
`;

export const TakePictureCircleInner = styled.View`
  flex: 1;
  border-radius: 99999px;
  background-color: #fff;
  border: 2px solid ${({ theme }) => theme.colors.background.main};
`;
