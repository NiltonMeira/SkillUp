import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const WhiteBox = styled(Box)`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    padding: 50px;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        padding: 20px;
        flex-direction: column;
        justify-content: center;
        text-align: justify;
    }
`;

export const TextBox = styled(Box)`
    display: flex;
    flex-direction: column;
    width: 60%;
    gap: 20px;

    @media (max-width: 768px) {
        width: 100%;
    }
`;