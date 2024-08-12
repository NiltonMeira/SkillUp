import {Typography } from '@mui/material'
import {ColorBox, MainBox, PictureBox, StyledBox, StyledButton } from './style'

export const CenterBox = () => {
    return (
        <>
            <MainBox>
                <PictureBox>
                    <ColorBox></ColorBox>
                    <img src='/hands.png' alt="" className='handsImg' />
                </PictureBox>
                <StyledBox>
                    <img src='Skillup.svg' alt="" className='bigSkillup' />
                    <Typography variant="h5" component="h2">
                        Unindo experiência e propósito para desenvolver pessoas e organizações.
                    </Typography>
                    <StyledButton variant="text">
                        <Typography variant="h6" component="h2">
                            Saiba mais
                        </Typography>
                    </StyledButton>
                </StyledBox>
            </MainBox>
        </>
    )
}