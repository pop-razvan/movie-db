import styled from 'styled-components';
import { purple, white, lightGrey, baseText } from './constants/theme';

export const MainContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${lightGrey};
    padding: 40px 40px;
    @media (max-width: 767px) {
        padding: 40px 20px;
    }
`;

export const Button = styled.button`
    height: 36px;
    width: 100%;
    border-radius: 6px;
    border: 2px solid ${purple};
    color: ${purple};
    background-color: transparent;
    font-weight: bold; 
    &:hover {
        color: ${white};
        background-color: ${purple};
    }
    @media (max-width: 767px) {
        margin-top: 20px;
    }
`

export const H1 = styled.h1`
    color: ${purple};
    font-weight: 900;
    margin-bottom: 20px;
    @media (max-width: 767px) {
        margin-top: 40px;
    }
`;

export const H4 = styled.h4`
    color: ${purple};
    font-weight: 700;
    margin-bottom: 20px;
`;

export const H5 = styled.h5`
    color: ${purple};
    font-weight: 500;
`;

export const Text = styled.p`
    margin-top: 16px;
    margin-bottom: 0;
    color: ${baseText};
`;
export const TextSm = styled.p`
    margin-top: 4px;
    font-size: 14px;
    margin-bottom: 0;
    color: ${baseText};
`;

export const Paragraph = styled.div`
margin-top: 30px;
    p {
        color: ${baseText}; 
    }
`;