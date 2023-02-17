import { ReactNode } from 'react';
import styled from 'styled-components';

interface IContainer {
  children: ReactNode;
}

export const KeyContainer = styled.div<IContainer>`
  display: flex;
  justify-content: center;
  padding: 30px;
`;

export const KeyWrapper = styled.div<IContainer>`
  display: flex;
  justify-content: space-between;
`;
