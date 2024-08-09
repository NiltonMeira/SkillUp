import { Box, Button, styled } from "@mui/material";

export const MainBox = styled(Box)`
    display: flex;
    justify-content:center;
    align-items: center;

    height: 100vh;
    gap: 60px;

`
export const StyledBox = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 60px;
    
`
export const ColorBox = styled(Box)`
    background-color: #f1bb06;
    height: 499.99px;
    width: 150px;
`
export const PictureBox = styled(Box)`
    display: flex;
    gap: 50px;
`
export const StyledButton = styled(Button)`
    padding: 20px;
    background-color: #b6b3b3;
    color: black;
    width: 30%;

    &:hover{
        background-color: #f1bb06;
    }
`

export const ButtonBox = styled(Box)`
    display: flex;
    width: 100%;
    justify-content: center;
`