import styled from "styled-components";

export const Container = styled.div`
  width: 516px;
  max-height: 225px;
  margin: 40px 425px 56px;
  padding: 24px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;


  @media (max-width: 700px){
        max-width: 516px;
        width: 70%; 
        border-radius: 3px;
    }

`;


export const ContainerImage = styled.div`
    width: 35%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ImageProfile = styled.img`
    width: 80px;
    width: 80px;
    border-radius: 34px;
`;

export const ContainerDetails = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction:column;
    justify-content: flex-start;

`;

export const Description = styled.h3`
    color: #9f9f9f;
    font-size: 16px;
    font-family: Roboto;
    font-weight: normal;
    line-height: 1.25;
    text-align: left;

`;

export const Label = styled.label`
    font-family: roboto;
    font-style: normal;
    line-height: 1.33;
    text-align: left;
    color: #5f5f5f;
`;

export const Author = styled.span`
   
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: #7a7a7a;
`;