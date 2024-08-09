import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { StyledAppBar, StyledBox, StyledToolBar } from './styles';
import SkillUp from '../../assets/skillup.png'
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <StyledToolBar>
          <img src={SkillUp} alt="" />

          <StyledBox>
            <Link to={"/"} className='link'>
              <Typography variant="h5" component="h2">
                Home
              </Typography>
            </Link>
            <Link to={"/"} className='link'>
              <Typography variant="h5" component="h2">
                Quem somos 
              </Typography>
            </Link>
            <Link to={"/"} className='link'>
              <Typography variant="h5" component="h2">
                Serviços
              </Typography>
            </Link>
            <Link to={"/"} className='link'>
              <Typography variant="h5" component="h2">
                Contato
              </Typography>
            </Link>
          </StyledBox>

        </StyledToolBar>
      </StyledAppBar>
    </Box>
  );
}
