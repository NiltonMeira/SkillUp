import { Box, styled, Typography } from "@mui/material";

export const YelowBox = styled(Box)`
    min-height: 100vh;
    background-color: #f1bb06;
    color: white;
    display: flex;
    padding: 100px;
    flex-direction: column;
    justify-content: space-around;

    @media (max-width: 768px) {
        padding: 20px;
        text-align: center;
        justify-content: center;
    }
`;

export const Title = styled(Typography)`
    color: #0B314A;
    font-weight: bold;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        font-size: 24px;
        margin-bottom: 15px;
    }
`;

export const StyledImages = styled("img")`
    width: 200px;
    border-radius: 50%;

    @media (max-width: 768px) {
        width: 150px;
    }
`;

export const ProfileBox = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: center;
    padding: 20px;

    @media (max-width: 768px) {
        gap: 10px;
        padding: 10px;
    }
`;

export const TeamBox = styled(Box)`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;