import styled, { DefaultTheme } from 'styled-components';
import { theme } from '../../assets';
import { ReactNode } from 'react';

interface IButtonProps {
  system?: boolean | undefined;
  bgColor: string;
  isActive: boolean;
  children?: string | ReactNode;
  tabIndex: number;
  type: string;
  theme: DefaultTheme;
  data: string;
}

const isGrow = ({ data }: IButtonProps): boolean =>
  data === 'Space' ||
  data === 'ShiftRight' ||
  data === 'ShiftLeft' ||
  data === 'Enter' ||
  data === 'Backspace';

const isArrowKey = ({ data }: IButtonProps): boolean =>
  data === 'ArrowUp' ||
  data === 'ArrowLeft' ||
  data === 'ArrowDown' ||
  data === 'ArrowRight';

export const Button = styled.button<IButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: ${({ system }) => (system ? 'lowercase' : 'uppercase')};
  font-size: ${props =>
    props.system && !isArrowKey(props) ? '.7rem' : '1rem'};
  color: ${({ data }) =>
    data === 'Space' ? 'transparent' : theme.typography.main};
  padding: ${props => (isArrowKey(props) ? null : '12px')};
  margin: 3px;
  background-color: ${({ isActive, bgColor, theme }) =>
    isActive ? theme.background.orange : bgColor};
  border: 1px solid ${theme.border.lightGrey};
  border-radius: 3px;
  min-width: 50px;
  flex-grow: ${props => (isGrow(props) ? 1 : 0)};
`;
