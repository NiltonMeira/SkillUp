import { Box, styled, Typography } from "@mui/material";

export const YelowBox = styled(Box)`
    width: 100vw;
    min-height: 100vh;
    background-color: #f1bb06;
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
    width: 60%;
    gap: 20px;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Title = styled(Typography)`
    color: #0B314A;
    font-weight: bold;
`;

export const CutedPicture = styled("img")`
    width: 30%;
    align-self: flex-start;

    @media (max-width: 768px) {
       display:none;
    }
`;
