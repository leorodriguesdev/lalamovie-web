import styled from 'styled-components';

export const Container = styled.header`
    height: 5rem;
    margin: 0 auto;
    padding: 0 2rem;

    display: flex;
    justify-content: center;
    align-items: center;
    background: #121212;
`;

export const Content = styled.div`
    width: 1170px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem 0 0 ;

    a {
        color: #fff;
        padding: 2rem;
    }

    a:link, a:visited {
	    text-decoration: none;
	}
    a:hover {
	    text-decoration: none;
	color: #fdbf00;
	}
    a:active {
	    text-decoration: none;
	}
    &:first-child {
        margin: 0;
        padding: 0;
    }
`;


