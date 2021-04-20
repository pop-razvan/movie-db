import styled from 'styled-components';
import { purple, baseText } from '../../constants/theme'

export const SearchContainer = styled.div`
        background: url(/search.svg);
        background-position: right;
        background-repeat: no-repeat;
        background-size: contain;
        height: 400px;
        display: flex;
        align-items: flex-end;
        .row {
            width: 100%;
            margin-bottom: 60px;
        }
        @media (max-width: 767px) {
            height: 250px;
            .row {
                margin-bottom: 0;
            }
        }
`;

export const SearchInput = styled.input`
    height: 36px;
    border: 2px solid ${purple};
    width: 100%;
    padding: 0 10px;
    border-radius: 6px;
    background-color: transparent;
    color: ${baseText};
    &:focus {
        outline: none;
    }
`;