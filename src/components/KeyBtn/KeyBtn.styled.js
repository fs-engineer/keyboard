import styled from 'styled-components';
import theme from '../../assets/theme';

const isGrow = props =>
  props['data-code'] === 'Space' ||
  props['data-code'] === 'ShiftRight' ||
  props['data-code'] === 'ShiftLeft' ||
  props['data-code'] === 'Enter'
    ? 1
    : 0;

export const Button = styled.button`
  text-transform: ${props => (props.system ? 'lowercase' : 'uppercase')};
  font-size: 1rem;
  color: ${props =>
    props['data-code'] === 'Space' ? 'transparent' : theme.typography.main};
  padding: 12px;
  margin: 3px;
  background-color: ${props => (props.isActive ? 'orange' : props.bgColor)};
  border: 1px solid ${theme.border.lightGrey};
  border-radius: 3px;
  min-width: 50px;
  flex-grow: ${isGrow};
`;
