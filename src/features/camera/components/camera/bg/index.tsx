import React, { FC, PropsWithChildren } from 'react';
import { CameraBGContainer, CameraBGDot, CameraBGLine, CameraBGLineContainer } from './styles';

const CameraBG: FC<PropsWithChildren> = ({ children }) => {
  return (
    <CameraBGContainer>
      <CameraBGDot />
      <CameraBGLineContainer>
        <CameraBGLine />
        <CameraBGLine />
        <CameraBGLine />
      </CameraBGLineContainer>
    </CameraBGContainer>
  );
};

export default CameraBG;
