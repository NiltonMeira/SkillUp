import { Typography } from "@mui/material";
import { ProfileBox, StyledImages, TeamBox, Title, YelowBox } from "./stryle";

export const LookScreen = () => {
    return (
        <>
            <YelowBox>
                <Title variant="h3">
                    Nosso time
                </Title>
                <TeamBox>
                    <ProfileBox>
                        <StyledImages src="/Marilia.png" alt="Foto de Marília Guimarães" />
                        <Typography variant="h6" component="h2">
                            Marília Guimarães
                        </Typography>
                        <Typography variant="h6" component="h2">
                            Sócia fundadora
                        </Typography>
                    </ProfileBox>
                    <ProfileBox>
                        <StyledImages src="/Vanusa.png" alt="Foto de Vanusa Vilarinho" />
                        <Typography variant="h6" component="h2">
                            Vanusa Vilarinho
                        </Typography>
                        <Typography variant="h6" component="h2">
                            Sócia fundadora
                        </Typography>
                    </ProfileBox>
                    <ProfileBox>
                        <StyledImages src="/Consultores.png" alt="Imagem dos consultores" />
                        <Typography variant="h6" component="h2">
                            Consultores parceiros
                        </Typography>
                        <Typography variant="h6" component="h2">
                            Colaboradores
                        </Typography>
                    </ProfileBox>
                </TeamBox>
            </YelowBox>
        </>
    );
};
