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

const isGrow = ({ data }: any): number =>
  data === 'Space' ||
  data === 'ShiftRight' ||
  data === 'ShiftLeft' ||
  data === 'Enter'
    ? 1
    : 0;

const isArrowKey = ({ data }: any): string | null => {
  console.log(data);
  return data === 'ArrowUp' ||
    data === 'ArrowLeft' ||
    data === 'ArrowDown' ||
    data === 'AltRight'
    ? null
    : '12px';
};

export const Button = styled.button<IButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: ${({ system }) => (system ? 'lowercase' : 'uppercase')};
  font-size: 1rem;
  color: ${({ data }) =>
    data === 'Space' ? 'transparent' : theme.typography.main};
  padding: ${isArrowKey};
  margin: 3px;
  background-color: ${({ isActive, bgColor, theme }) =>
    isActive ? theme.background.orange : bgColor};
  border: 1px solid ${theme.border.lightGrey};
  border-radius: 3px;
  min-width: 50px;
  flex-grow: ${isGrow};
`;
