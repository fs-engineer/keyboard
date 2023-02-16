import styled from 'styled-components';
import { theme } from '../../assets';

export const Window = styled.div`
  width: 784px;
  height: 200px;
  border: 1px solid ${theme.border.lightGrey};
  border-radius: 5px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0 25px;
`;
