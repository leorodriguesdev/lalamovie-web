import styled from "styled-components";

export const Container = styled.div`
    width: 200px;
    height: 445px;
    background: #484646;
    border-radius: 4px;

`;

export const Content = styled.div`
    margin: 7px 7px 0px 7px;
    padding: 0;

    img {
    border-radius: 4px;
    }

`;


export const Evaluation = styled.div`
    margin: 5px 7px 7px 7px;
    padding: 0;
    width: 170px;
    height: 20px;
//    background-color: #333;
    display: flex;
    justify-content: space-between;

    p {
        margin: 0 auto;
        padding: 0;
        justify-content: left; 
    }
`;