import styled from 'styled-components';

export const SearchBar = styled.header`
    width: 30rem;
    height: 3rem;
    margin: 0 auto;
    border-radius: 10px;

    display: flex;
    align-items: center;
    background: #484646;
`;

export const Content = styled.div`
    width: 1170px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;


    input {
        width: 100%;
	    height: 100%;
        background-color: #484646;
        margin: 0 auto;
        padding: 0.9rem;
        border: none;
        border-radius: 100px;
    }
`;


