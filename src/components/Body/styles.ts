import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 80px;
    background-color: #343434;
    justify-content: center;
    align-items: center;
    overflow: auto;
    
`;

export const ContainerPost = styled.div`
    display: flex;
    flex-direction: column; 
    width: 100%;
    height: 600px;
    overflow: scroll;
    background-color: #343434;
    justify-content: center;
    align-items: center;
`;

export const ContainerFeed = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;    
    background-color: #343434;
    justify-content: center;
    align-items: center;
`;