import styled from 'styled-components/native';

export const CameraBGContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius.large};
  overflow: hidden;
  position: absolute;
  z-index: 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 3px 6px;
  gap: 2px;
`;

export const CameraBGDot = styled.View`
  width: 13px;
  height: 13px;
  background-color: ${({ theme }) => theme.colors.background.main};
  border-radius: 99999px;
`;

export const CameraBGLineContainer = styled.View`
  flex-direction: column;
  justify-content: space-between;
  width: 22%;
  height: 13px;
`;

export const CameraBGLine = styled.View`
  width: 100%;
  height: 2.5px;
  background-color: #000;
  border-radius: 99999px;
`;
