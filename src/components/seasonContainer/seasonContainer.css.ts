import styled from "styled-components";
import { baseText, white } from '../../constants/theme';

export const ItemContainer = styled.div`
background-color: ${white};
box-shadow: 5px 5px 8px 3px rgba(0,0,0,0.08);
border-radius: 8px;
padding: 20px 30px;
margin-top: 20px;
h4 {
    margin-bottom: 0;
    cursor: pointer;
}
`;

export const EpisodeContainer = styled.div`
    padding: 30px 0;
    &.bordered {
        border-top: 1px solid ${baseText};
    }
    .episode-col {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .image-col {
        display: flex;
        justify-content: center;
    }
`