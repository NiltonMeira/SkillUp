import { Box, Button, Typography } from '@mui/material'
import Hands from '../../../../assets/hands.png'
import Skillup from '../../../../assets/skillup.svg'
import { ColorBox, MainBox, PictureBox, StyledBox } from './style'

export const CenterBox = () => {
    return (
        <>
            <MainBox>
                <PictureBox>
                    <ColorBox></ColorBox>
                    <img src={Hands} alt="" className='handsImg' />
                </PictureBox>
                
                <StyledBox>
                    
                    <img src={Skillup} alt="" className='bigSkillup'/>
                    <Typography variant="h6" component="h2">
                        Unindo experiência e propósito para desenvolver pessoas e organizações.
                    </Typography>
                    <Button variant="text">Saiba mais</Button>
                </StyledBox>
                
            </MainBox>
        </>
    )
}