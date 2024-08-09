import { Box } from '@mui/material'
import Hands from '../../../../assets/hands.png'
import Skillup from '../../../../assets/skillup.png'
import { MainBox } from './style'

export const CenterBox= () => {
    return(
        <>
            <MainBox>
                <img src={Hands} alt="" className='handsImg'/>
                <Box>
                    <img src={Skillup} alt=""  />
                    <p>Unindo experiência e propósito para desenvolver pessoas e organizações.</p>
                </Box>
            </MainBox>
        </>
    )
}