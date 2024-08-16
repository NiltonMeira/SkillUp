import { Typography } from "@mui/material"
import { CutedPicture, TextBox, WhiteBox, YellowBox } from "./style"

export const Article = () => {
    return (
        <>
            <YellowBox>
                <TextBox>
                    <Typography variant="h3" component="h1">
                        Vanusa Vilarinho
                    </Typography>
                    <Typography component="p">
                        - Com mais de 30 anos de experiência profissional em desenvolvimento humano e organizacional, na área de gestão e líder de equipes, atuou em empresas renomadas com Volvo, Bosch, Sistema FIEP, Grupo Marista, Grupo Expoente, Grupo Positivo e Grupo UBEC.
                    </Typography>
                    <Typography component="p">
                        - Atuou como alta liderança de escolas do segmento de educação básica na gestão de grandes equipes (140 pessoas).
                    </Typography>
                    <Typography component="p">
                        - Professora de Pós-graduação, lecionando módulos de gestão de pessoas e consultoria interna de RH em diversas Instituições de Ensino Superior (IES_ - PUC, Faculdade União de Ponta Grossa, IBPEX, FESP e UniBrasil).
                    </Typography>
                    <Typography component="p">
                        - Facilitadora em programas de treinamento e desenvolvimento.

                    </Typography>
                    <Typography component="p">
                        - Como voluntária, atuou como diretora de desenvolvimento na ABRH-PR, na presidência e como chair person da juventude no Rotary Club Gralha Azul.

                    </Typography>
                </TextBox>
                <CutedPicture src="/VanusaCortada.png">
                </CutedPicture>

            </YellowBox>
            <WhiteBox>
                <></>
            </WhiteBox>
        </>
    )
}