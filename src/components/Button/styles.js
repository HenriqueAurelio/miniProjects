import styled from 'styled-components';

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  color: white;
  font-size: 1em;
  border: none;
  border-radius: 6px;
  padding:10px;
`;

export const Container = styled.div`
`;

export const ErrorButton = styled(Button)`
 background-color: red;
 color: ${props => props.marginLeft ? "10px" : "0px"};
`


export const WarningButton = styled(Button)`
 margin-left: ${props => props.marginLeft ? "10px" : "0px"};
 background-color: #EB6440;
`
export const SuccessButton = styled(Button)`
 margin-left: ${props => props.marginLeft ? "10px" : "0px"};
 background-color: green;
`
