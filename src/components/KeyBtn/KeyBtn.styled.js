import styled from 'styled-components';
import theme from '../../assets/theme';

export const Button = styled.button`
  text-transform: ${props => (props.system ? 'lowercase' : 'uppercase')};
  font-size: 1rem;
  color: ${theme.typography.main};
  padding: 12px;
  margin: 3px;
  background-color: ${props => (props.isActive ? 'orange' : props.bgColor)};
  border: 1px solid ${theme.border.lightGrey};
  border-radius: 3px;
`;
