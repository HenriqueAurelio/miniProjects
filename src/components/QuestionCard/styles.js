import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction:'row';
  align-items: center;
  justify-content: center;
  margin-top:30px;
  width:100%;
`;

export const InnerContainer = styled.div`
  display:flex;
  flex-direction:'row';
  align-items: center;
  justify-content: space-between;
  margin:0px 20px 0px 20px;
  background-color: white;
  border-radius:8px;
  width:30%;
  padding:0px 10px 0px 10px;
  height:70px;
`;

export const CustomH1 = styled.h1`
  color: ${props => props.type === "warning" ? "yellow" : ""};
  color: ${props => props.type === "success" ? "green" : ""};
  color: ${props => props.type === "error" ? "red" : ""};
`