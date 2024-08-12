import { AppBar, Box, styled, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledAppBar = styled(AppBar)`
    background-color: #f2f2f2;
    color: black;
    padding-left: 100px;
    padding-right: 100px;   
    position: fixed;

    @media (max-width: 960px) {
        padding-left: 20px;
        padding-right: 20px;
    }
`;

export const StyledToolBar = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
    padding: 20px;
`;

export const StyledBox = styled(Box)`
    display: flex;
    justify-content: space-between;
    gap: 50px;

    @media (max-width: 960px) {
        gap: 20px;
    }
`;

export const StyledLogo = styled("img")`
    width: 150px;

    @media (max-width: 600px) {
        width: 120px;
    }
`;

export const ModalContent = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 20px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    transform: translateY(-100%);
    animation: slideDown 0.3s forwards;

    @keyframes slideDown {
        to {
            transform: translateY(0);
        }
    }
`;

export const StyledLink = styled(Link)`
    margin: 15px 0;
    font-size: 24px;
    color: black;
    text-decoration: none;
    text-align: center;

    &:hover {
        color: #f1bb06;
    }
`;
