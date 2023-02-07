import styled from 'styled-components';

export const Button = styled.button`
  text-transform: uppercase;
  font-size: 1rem;
  color: slategray;
  padding: 12px;
  margin: 3px;
  background-color: ${props => (props.isActive ? 'orange' : 'transparent')};
  border: 1px solid slategray;
  border-radius: 3px;
  
  [data-code='']
`;
