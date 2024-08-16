import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { StyledAppBar, StyledBox, StyledLogo, StyledToolBar, ModalContent, StyledLink } from './styles';
import { Link } from 'react-router-dom';

export default function Header() {
  const [open, setOpen] = useState(false);
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <StyledToolBar>
          <StyledLogo src='Skillup.svg' alt="Logo SkillUp" />
          
          <IconButton 
            onClick={handleOpen} 
            sx={{ display: { xs: 'block', md: 'none' } }}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <StyledBox sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link to={"/"} className='link'>
              <Typography variant="h6" component="h2">
                Home
              </Typography>
            </Link>
            <Link to={"/ourteam"} className='link'>
              <Typography variant="h6" component="h2">
                Nosso time
              </Typography>
            </Link>
            <Link to={"/services"} className='link'>
              <Typography variant="h6" component="h2">
                Serviços
              </Typography>
            </Link>
            <Link to={"/contact"} className='link'>
              <Typography variant="h6" component="h2">
                Contato
              </Typography>
            </Link>
          </StyledBox>
        </StyledToolBar>
      </StyledAppBar>

      <Modal 
        open={open} 
        onClose={handleClose}
        sx={{ top: '64px' }}  
      >
        <ModalContent>
          <IconButton onClick={handleClose} sx={{ alignSelf: 'flex-end' }}>
            <CloseIcon />
          </IconButton>
          <StyledLink to={"/"} onClick={handleClose}>
            Home
          </StyledLink>
          <StyledLink to={"/ourteam"} onClick={handleClose}>
            Nosso time
          </StyledLink>
          <StyledLink to={"/"} onClick={handleClose}>
            Serviços
          </StyledLink>
          <StyledLink to={"/"} onClick={handleClose}>
            Contato
          </StyledLink>
        </ModalContent>
      </Modal>
    </Box>
  );
}
