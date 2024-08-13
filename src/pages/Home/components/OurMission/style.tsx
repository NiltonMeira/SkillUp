import { Box, styled, Typography } from "@mui/material";

export const Title = styled(Typography)`
    color: #f1bb06;
    font-weight: bold;
`;

export const WhiteBox = styled(Box)`
    width: 100vw;
    min-height: 100vh;
    color: black;
    display: flex;
    justify-content: space-between;
    padding: 50px;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        padding: 20px;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
`;

export const BlueBox = styled(Box)`
    width: 100vw;
    min-height: 100vh;
    background-color: #0B314A;
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 50px;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        padding: 20px;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
`;

export const TextBox = styled(Box)`
    display: flex;
    flex-direction: column;
    width: 40%;
    gap: 20px;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const PicHands = styled("img")`
    width: 40%;
`

