import { AppBar, Box, styled, Toolbar } from "@mui/material";

export const StyledAppBar = styled(AppBar)`
    background-color: #f2f2f2;
    color: black;
    padding-left: 100px;
    padding-right: 100px;   
    position: fixed
`
export const StyledToolBar = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
    padding: 20px;
`
export const StyledBox = styled(Box)`
    display: flex;
    justify-content: space-between;
    gap: 100px;

`
export const StyledLogo = styled("img")`
    width: 150px;
`