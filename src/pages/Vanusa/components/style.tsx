import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const YellowBox = styled(Box)`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    padding: 50px;
    align-items: center;
    flex-wrap: wrap;
    background-color: #f1bb06;
    color: white;

    @media (max-width: 768px) {
        padding: 20px;
        flex-direction: column;
        justify-content: center;
        text-align: justify;
    }
`;

export const WhiteBox = styled(Box)`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    padding: 50px;
    align-items: center;
    flex-wrap: wrap;
    background-color: #f1bb06;
    color: white;

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
    text-align: justify;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const CutedPicture = styled("img")`
    width: 18%;
    align-self: center; // Alinha a imagem verticalmente ao centro

    @media (max-width: 768px) {
        display: none;
    }
`;


