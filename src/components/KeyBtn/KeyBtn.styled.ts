import styled, { DefaultTheme } from 'styled-components';
import { theme } from '../../assets';
import { ReactNode } from 'react';

interface IButtonProps {
  system: boolean;
  bgColor: string;
  isActive: boolean;
  children?: string | ReactNode;
  tabIndex: number;
  type: string;
  theme: DefaultTheme;
  data: string;
}

const isGrow = (props: any) => {
  console.log(props);
  return props['data-code'] === 'Space' ||
    props['data-code'] === 'ShiftRight' ||
    props['data-code'] === 'ShiftLeft' ||
    props['data-code'] === 'Enter'
    ? 1
    : 0;
};

export const Button = styled.button<IButtonProps>`
  text-transform: ${(props: IButtonProps) =>
    props.system ? 'lowercase' : 'uppercase'};
  font-size: 1rem;
  color: ${(props: IButtonProps) =>
    props.data === 'Space' ? 'transparent' : theme.typography.main};
  padding: 12px;
  margin: 3px;
  background-color: ${(props: IButtonProps) =>
    props.isActive ? 'orange' : props.bgColor};
  border: 1px solid ${theme.border.lightGrey};
  border-radius: 3px;
  min-width: 50px;
  flex-grow: ${isGrow};
`;
