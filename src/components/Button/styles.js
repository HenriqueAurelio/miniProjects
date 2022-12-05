import styled from 'styled-components';

const Button = styled.button`
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
`


export const WarningButton = styled(Button)`
 margin-left: ${props => props.marginHorizontal ? "10px" : "0px"};
 margin-right: ${props => props.marginHorizontal ? "10px" : "0px"};
 background-color: #EB6440;
`
export const SuccessButton = styled(Button)`
 background-color: green;
`
