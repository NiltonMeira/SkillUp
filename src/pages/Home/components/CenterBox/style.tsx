import { Box, Button, styled, Typography } from "@mui/material";

export const MainBox = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    gap: 60px;

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        gap: 30px;
    }
`;

export const StyledBox = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 60px;
    
    @media (max-width: 768px) {
        gap: 30px;
        padding: 20px;
        text-align: center;
    }
`;

export const ColorBox = styled(Box)`
    background-color: #f1bb06;
    height: 499.99px;
    width: 150px;

    @media (max-width: 768px) {
        height: 300px;
        width: 100px;
        display: none;
    }
`;

export const PictureBox = styled(Box)`
    display: flex;
    gap: 50px;
    max-width: 100vw;

    img.handsImg {
        max-width: 100%;
        height: auto;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
`;

export const StyledButton = styled(Button)`
    padding: 20px;
    background-color: #b6b3b3;
    color: black;
    width: 30%;

    &:hover {
        background-color: #f1bb06;
    }

    @media (max-width: 768px) {
        width: 80%;
    }
`;

export const ButtonBox = styled(Box)`
    display: flex;
    width: 100%;
    justify-content: center;
`;

export const Subtitle = styled(Typography)`
    width: 90%;
    text-align: center;
`