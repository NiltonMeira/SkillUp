import { Box, styled } from "@mui/material";

export const FullBox = styled(Box)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    height: 100vh;
`

export const StyledCard = styled(Box)`
    display: flex;
    text-align: justify;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: yellow;
    border-radius: 20px;

    width: 400px;
    height: 200px;
`