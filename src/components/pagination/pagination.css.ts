import styled from "styled-components";
import { purple, baseText } from '../../constants/theme';

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 40px;
`;

export const PaginationText = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px;
  color: ${baseText};
`;

export const PaginationButton = styled.button`
    color: ${purple};
    border: 0;
    background-color: transparent;
    &:hover {
        outline: 1px auto ${purple};
    }
    &:focus {
        outline: none;
    }
    &:disabled {
        outline: none;
        opacity: 0.6;
    }
`;
