import styled from "styled-components";

export const Container = styled.div`
  width: 516px;
  height: 353px;
  margin: 40px 425px 56px;
  padding: 24px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  @media (max-width: 700px){
        width: 70%; 
        border-radius: 3px;
    }

`;
export const PickImage = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 40px;    
    border: 2px dashed #ccc;
    cursor: pointer;

`;

export const PickInput = styled.input`
    width: 100px;
    height: 100px;
    z-index: 99;
    opacity: 0;
    cursor: pointer;
    
`;

export const ContainerImagePicked = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 40px;    
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const PickedImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 40px;
`;



export const ContainerInput = styled.div`
    width: 468px;
    height: 40px;
    margin: 16px 0 8px;
        
    border-radius: 8px;
    background-color: #494949;
    display: flex;
    justify-content: center;

    @media (max-width: 700px){
        width: 100%; 
    }
`;

export const Input = styled.input`
    width: 90%;
    height: 90%;
    border-radius: 8px;
    background-color: #494949;
    border: none;
    color: #FFF;
    
    font-family: "roboto";

    &:focus{
        outline: none;
    }
`;

export const InputTextArea = styled.textarea`
    width: 90%;
    height: 90%;
    border-radius: 8px;
    background-color: #494949;
    border: none;
    color: #FFF;
    
    font-family: "roboto";

    &:focus{
        outline: none;
    }
`;


export const ContainerButtons = styled.div`
    width: 90%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: end;
    margin-top: 10px;
`;

interface ButtonProps{
    primary?: boolean
}

export const Button = styled.button<ButtonProps>`
    width: 98px;
    height: 41px;
    margin: 0 0 0 24px;
    padding: 12px 24px;
    object-fit: contain;
    border-radius: 8px;
    background-color: ${({primary}) => primary ? '#10c942': '#313131'};
    border: none;
    color: #fff;
`;