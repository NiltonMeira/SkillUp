import { Typography } from "@mui/material"
import { FullBox, StyledCard } from "./Style"

export const MainBox = () => {
    return (
        <>
            <FullBox>
                <StyledCard>
                    <Typography variant="h6" component="h2">
                        Desenvolvimento de liderança
                    </Typography>
                    <Typography variant="h6" component="h6">
                        Programas de Formação de Líderes
                    </Typography>
                    <Typography variant="h6" component="h6">
                        Coaching Executivo
                    </Typography>
                    <Typography variant="h6" component="h6">
                        Mentoria para Gestores
                    </Typography>
                    <Typography variant="h6" component="h6">
                        Treinamentos em Soft Skills para Líderes
                    </Typography>
                </StyledCard>

            </FullBox>

        </>
    )
}