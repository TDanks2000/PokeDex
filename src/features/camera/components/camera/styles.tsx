import styled from 'styled-components/native';

export const CmaraContainer = styled.View`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

export const CmaraInsideContainer = styled.View`
  flex: 1;
  position: relative;
  z-index: 100;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  overflow: hidden;
  z-index: 1;
  margin: 4px;
  margin-bottom: 19px;
`;
